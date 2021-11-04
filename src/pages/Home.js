import '../css/Home.css';
import { Link } from 'react-router-dom';

function App() {
  return (
      <>
        <div className="homepage-container">
          <div className="homepage-left">
              <small>Hello I am,</small>
              <big>John Doe.</big>
              <small>Adventurer by day, coder by night.</small>
              <nav>
                <a href="404.html"><i className="fab fa-instagram"></i></a>
                <a href="404.html"><i className="fab fa-twitter-square"></i></a>
                <a href="404.html"><i className="fab fa-facebook-square"></i></a>
              </nav>
          </div>
          <div className="homepage-right">
            <div className="homepage-right-text">
              Welcome to my blog. This is where I write about a range of topics that fascinate me. If you like what I write, please consider subscribing to my newsletter.
            </div>
            <div className="homepage-btn-container">
              <Link to='/articles' className="homepage-btn">Explore <i class="fas fa-rocket"></i></Link>
              <a href="404.html" className="homepage-btn">Subscribe to my Newsletter <i class="far fa-file-alt"></i></a>
            </div>
          </div>
          <div className="homepage-background-img"></div>
          <div className="homepage-background"></div>
        </div>
      </>
  );
};

export default App;
