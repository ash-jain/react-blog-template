import { Link } from 'react-router-dom';

import '../css/Home.css';

const Home = () => {
    return (
      <div className="homepage-container">
        <div className="homepage-left">
          <small>Hello I am,</small>
          <big>Johnathan Doe.</big>
          <small>Adventurer by day, coder by night.</small>
          <nav>
            <a href="404.html"><i className="fab fa-instagram"></i></a>
            <a href="404.html"><i className="fab fa-twitter-square"></i></a>
            <a href="404.html"><i className="fab fa-facebook-square"></i></a>
          </nav>
        </div>
        <div className="homepage-right">
          <div className="homepage-right-text">
            Welcome to my blog. This is where I write about a range of topics that fascinate me. If you like what I write, please consider subscribing to my <a href="404.html">newsletter</a> or supporting me on <a href="404.html">patreon</a>.
          </div>
          <div className="homepage-btn-container">
            <Link to='/articles' className="homepage-btn"> Explore <i className="fas fa-rocket"></i></Link>
            <Link to="404.html" className="homepage-btn"> Subscribe to my Newsletter <i className="far fa-file-alt"></i></Link>
          </div>
        </div>
        <div className="homepage-background"></div>
      </div>
    );
};

export default Home;
