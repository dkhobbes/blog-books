#!/usr/bin/env #!/usr/bin/env bash

rootpass=$1
mysqldb=$2
mysqluser=$3
mysqlpass=$4

wp_install=$5
wp_url=$6
wp_title=$7
wp_admin=$8
wp_admin_pass=$9
wp_admin_email=${10}

#echo "rootpass: $rootpass"
#echo "mysqldb: $mysqldb"
#echo "mysqluser: $mysqluser"
#echo "mysqlpass: $mysqlpass"

sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password $rootpass"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $rootpass"

# Install apache, mysql and php
sudo add-apt-repository ppa:ondrej/php
apt-get update
apt-get install -y python-software-properties apache2 mysql-server php7.1 php7.1-mcrypt php7.1-mbstring php7.1-curl php7.1-cli php7.1-mysql php7.1-gd php7.1-intl php7.1-xsl php7.1-zip

sed -i '/upload_max_filesize = 2M/c upload_max_filesize = 20M' /etc/php/7.1/apache2/php.ini
sed -i '/post_max_size = 8M/c post_max_size = 20M' /etc/php/7.1/apache2/php.ini

echo "
<Directory /var/www/html>
    AllowOverride All
</Directory>" >> /etc/apache2/sites-available/000-default.conf

a2enmod rewrite
phpenmod mcrypt
service apache2 restart

# Setup mysql user
echo "CREATE USER '$mysqluser'@'localhost' IDENTIFIED BY '$mysqlpass'"
echo "CREATE USER '$mysqluser'@'localhost' IDENTIFIED BY '$mysqlpass'" | mysql -uroot -p$rootpass
echo "CREATE DATABASE $mysqldb" | mysql -uroot -p$rootpass
echo "GRANT ALL ON $mysqldb.* TO '$mysqluser'@'localhost'"
echo "GRANT ALL ON $mysqldb.* TO '$mysqluser'@'localhost'" | mysql -uroot -p$rootpass
echo "flush privileges" | mysql -uroot -p$rootpass

# Install phpmyadmin
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/dbconfig-install boolean true"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/admin-user string root"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/admin-pass password $rootpass"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/app-pass password $rootpass"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/app-password-confirm password $rootpass"
apt-get -qy install phpmyadmin
echo "Include /etc/phpmyadmin/apache.conf" >> /etc/apache2/apache2.conf

# Check if index.html file exists in web root and remove it
if [ -f /var/www/html/index.html ]; then
  rm /var/www/html/index.html
fi

#if [ ! -f /var/www/.env ]; then
#    sudo chmod +x /var/www/.env.example
#    env_file = `sh /var/www/.env.example` > /var/www/.env
#    sudo chmod +x /var/www/.env.example
#fi

# Install Composer
curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/bin/composer
if [ -f "./composer.json" ]; then
  sudo chmod ug+x /usr/bin/composer
  composer install
fi

# Fix the timezone
sudo ln -fs /usr/share/zoneinfo/US/Central /etc/localtime
sudo dpkg-reconfigure -f noninteractive tzdata

# Install various utilities
apt-get install -y htop nmap

# Restart apache
service apache2 restart
