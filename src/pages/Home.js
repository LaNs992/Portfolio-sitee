import jsp from './../img/icons/js.png';
import reactp from './../img/icons/react.png';
import htmlp from './../img/icons/html.png';
import cssp from './../img/icons/css.png';

import sql from './../img/icons/sql.png';
import charp from './../img/icons/charp.png';
import cplus from './../img/icons/cplus.png';
import php from './../img/icons/php.png';
import kotlin from './../img/icons/kotlin.png';
import Header from './../componets/Header/header';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <ul className="social">
                <li className="front__item">
                  <a href="#!">
                    <img src={jsp} alt="Link" />
                  </a>
                </li>
                <li className="front__item">
                  <a href="#!">
                    <img src={htmlp} alt="Link" />
                  </a>
                </li>
                <li className="front__item">
                  <a href="#!">
                    <img src={cssp} alt="Link" />
                  </a>
                </li>
                <li className="front__item">
                  <a href="#!">
                    <img src={reactp} alt="Link" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <ul className="social">
                <li className="front__item">
                  <a href="#!">
                    <img src={php} alt="Link" />
                  </a>
                </li>
                <li className="front__item">
                  <a href="#!">
                    <img src={cplus} alt="Link" />
                  </a>
                </li>
                <li className="front__item">
                  <a href="#!">
                    <img src={charp} alt="Link" />
                  </a>
                </li>
                <li className="front__item">
                  <a href="#!">
                    <img src={sql} alt="Link" />
                  </a>
                </li>
                <li className="front__item">
                  <a href="#!">
                    <img src={kotlin} alt="Link" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
