import git from './../../img/icons/gitHub.svg';
import inst from './../../img/icons/instagram.svg';
import vk from './../../img/icons/vk.svg';
import '../Fotter/style.css';
const Fotter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/lans.nyhao">
                <img src={vk} alt="https://vk.com/lans.nyhao" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://instagram.com/lans.0_0?igshid=OGQ5ZDc2ODk2ZA==">
                <img
                  src={inst}
                  alt="https://instagram.com/lans.0_0?igshid=OGQ5ZDc2ODk2ZA=="
                />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/LaNs992">
                <img src={git} alt="https://github.com/LaNs992" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 Бажин Кирилл Андреевич</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
