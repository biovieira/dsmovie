import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="http://github.com/biovieira">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p>/biovieira</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
