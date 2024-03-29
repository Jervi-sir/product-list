import logo from '../images/logo.svg';
import search from '../images/search.svg';
import '../styles/Header.scss';

function Header(props) {
  return (
  <div className="header">
    <div class="top-band" >
      <div class="header">
        <div class="logo">
          <img src={logo} alt="" />
        </div>
        <form class="search-form" action="">
          <input type="text" placeholder="Search" />
          <button><img src={search} alt="" /></button>
        </form>
      </div>
      <div class="categrories">
        <button class="category active">perfume</button>
        <button class="category">Offer</button>
      </div>
    </div>
  </div>
  );
}

export default Header;
