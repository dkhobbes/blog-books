if (window.BlogTest === undefined) {window.BlogTest = {}; }
(function() {
  class ArchiveComponent extends React.Component {
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
        <div id="archive-title">Full list of Archives</div>
        <section>
          <ReactRouter.Link to={'/PostOne'}>
            <div className="tabs tabs-one tabs-img-1">
              <div className="blog-pic-title">one</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PostTwo'}>
            <div className="tabs tabs-img-2">
              <div className="blog-pic-title">two</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom tabs-one"></div>
          <div className="tabs-bottom"></div>
        </section>

        <section>
          <ReactRouter.Link to={'/PostThree'}>
            <div className="tabs tabs-one tabs-img-3">
              <div className="blog-pic-title">three</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PostFour'}>
            <div className="tabs tabs-img-4">
              <div className="blog-pic-title">four</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom tabs-one"></div>
          <div className="tabs-bottom"></div>
        </section>

        <section>
          <ReactRouter.Link to={'/PostFive'}>
            <div className="tabs tabs-one tabs-img-5">
              <div className="blog-pic-title">five</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PostSix'}>
            <div className="tabs tabs-img-6">
              <div className="blog-pic-title">six</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom tabs-one"></div>
          <div className="tabs-bottom"></div>
        </section>

        <section>
          <ReactRouter.Link to={'/PostThree'}>
            <div className="tabs tabs-one tabs-img-3">
              <div className="blog-pic-title">three</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PostFour'}>
            <div className="tabs tabs-img-4">
              <div className="blog-pic-title">four</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom tabs-one"></div>
          <div className="tabs-bottom"></div>
        </section>

        <section>
          <ReactRouter.Link to={'/PostFive'}>
            <div className="tabs tabs-one tabs-img-5">
              <div className="blog-pic-title">five</div>
            </div>
          </ReactRouter.Link>
          <ReactRouter.Link to={'/PostSix'}>
            <div className="tabs tabs-img-6">
              <div className="blog-pic-title">six</div>
            </div>
          </ReactRouter.Link>
          <div className="tabs-bottom tabs-one"></div>
          <div className="tabs-bottom"></div>
        </section>
        <div id="spacing"></div>

        <footer>
          <p>© copyright 2017 BOOK BLOG</p>
        </footer>
      </div>
    }
  }

  BlogTest.ArchiveComponent = ArchiveComponent;
})();
