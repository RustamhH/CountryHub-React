import logo from "../assets/logo.png"; // Import the logo.png file
import hamburger from "../assets/hamburgermenu.png"; // Import the logo.png file

const Header = () => {
  return (
    <div>
      <div style={{height:'90px',display:'flex',justifyContent:'space-around',alignItems:'center',boxShadow:'0px 4px 4px 0px #00000040'}}> 
        <img style={{height:'42px',width:'207px'}} src={logo} />
        <button style={{backgroundColor:'transparent',border:'none',cursor:'pointer'}}><img src={hamburger}/></button>
      </div>
    </div>
  );
};

export default Header;
