import logo from "../assets/logo.png";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Header = () => {
  return (
    <div>
      <div
        style={{
          height: '90px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '25px',
          alignItems: 'center',
          boxShadow: '0px 4px 4px 0px #00000040',
          backgroundColor: 'white',
        }}
      >
        <a href="/"><img style={{ height: '42px', width: '207px' }} src={logo} alt="Logo" /></a>
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
