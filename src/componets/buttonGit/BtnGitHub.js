import './../buttonGit/style.css';
import git from './../../img/icons/gitHub-black.svg';

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" class="btn-outline">
      <img src={git} alt="" />
      GitHub repos
    </a>
  );
};

export default BtnGitHub;
