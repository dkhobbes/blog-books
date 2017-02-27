if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class BlogPostSixComponent extends React.Component {
    constructor() {
      super();
    }

    render(){
      return <div>
      <header>
        <div id="eyebrow-nav">
        <ul>
          <li>About</li>
          <li>My books</li>
          <li><ReactRouter.Link to={'/'}>Home</ReactRouter.Link></li>
        </ul>
      </div>
      <div id="main-nav">
        <div className="logo"></div>
        <ul>
        <li>New releases</li>
        <li><ReactRouter.Link to={'/PopularMain'}>Popular</ReactRouter.Link></li>
        <li>Categories</li>
        <li>Recent Posts</li>
        <li>Author Interviews</li>
        </ul>
        </div>
      </header>

      <div className="other-pics tabs-img-6">
        <div id="home-pic-title">Book Blog</div>
      </div>
      <div className="blog-post">
        <h1>Blog Post Six</h1>
        <h1>JavaScript Web Applications</h1>
        <p>Building rich JavaScript applications that bring a desktop experience to the Web requires moving state from the server to the client side—not a simple task. This hands-on book takes proficient JavaScript developers through all the steps necessary to create state-of-the-art applications, including structure, templating, frameworks, communicating with the server, and many other issues.</p>
        <p>Throughout the book, you will work with real-world example applications to help you grasp the concepts involved. Learn how to create JavaScript applications that offer a more responsive and improved experience.</p>
        <p className="blog-post-end">Use the Model-View-Controller (MVC) pattern, and learn how to manage dependencies inside your application
        Get an introduction to templating and data binding
        Learn about loading remote data, Ajax, and cross-domain requests
        Create realtime applications with WebSockets and Node.js
        Accept dropped files and upload data with progress indicators
        Use major frameworks and libraries, including jQuery, Spine, and Backbone
        Write tests and use the console to debug your applications
        Get deployment best practices, such as caching and minification</p>
        </div>

      <footer>
        <p>© copyright 2017 BOOK BLOG</p>
      </footer>
      </div>
    }
  }

  BlogTest.BlogPostSixComponent = BlogPostSixComponent;
})();
