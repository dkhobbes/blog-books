if (window.BlogTest === undefined) {window.BlogTest = {}; }

(function() {
var mountNode = document.querySelector('#react-root');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var router = <Router history={ReactRouter.hashHistory}>
      <Route path="/" component={BlogTest.MainPageComponent} />
      <Route path="/Archive" component={BlogTest.ArchiveComponent} />
      <Route path="/PostOne" component={BlogTest.BlogPostOneComponent} />
      <Route path="/PostTwo" component={BlogTest.BlogPostTwoComponent} />
      <Route path="/PostThree" component={BlogTest.BlogPostThreeComponent} />
      <Route path="/PostFour" component={BlogTest.BlogPostFourComponent} />
      <Route path="/PostFive" component={BlogTest.BlogPostFiveComponent} />
      <Route path="/PostSix" component={BlogTest.BlogPostSixComponent} />
    </Router>;

ReactDOM.render(router, mountNode);
})();
