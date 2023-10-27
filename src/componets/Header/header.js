import part from './../../img/icons/part2.jpg';
import './../../componets/Header/style.css';
import file from './../files/kirill_bazhin.pdf';
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Привет, я <em>Кирилл</em>
          </strong>
          <div className="part_cont">
            <img src={part} alt="Light mode" className="part_photo" />
          </div>
          <br />
          Front,back developer
        </h1>
        <div className="header__text">
          <p>
            Политехнический Колледж Городского Хозяйства, Санкт-Петербург,
            Россия Информационные системы и программирование
            программист-системный администратор Сентябрь 2020 - по настоящее
            время
          </p>
          <p className="double_text">
            Школа Искусств Рапсодия, Киров, Россия Это область обучения,
            основанная на виде искусства, которое можно увидеть: рисовании,
            живописи, скульптуре. Сентябрь 2017 – Июнь 2020
          </p>
        </div>
        <a href={file} download className="btn">
          Скачать резюме
        </a>
      </div>
    </header>
  );
};

export default Header;
