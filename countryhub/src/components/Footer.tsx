import logo from "../assets/logo.png"; // Import the logo.png file
import hamburger from "../assets/hamburgermenu.png"; // Import the logo.png file

const Footer = () => {
  return (
    <div style={{padding:'20px'}}>
      <div style={{display:'flex',justifyContent:'space-between',fontSize:'19px'}}> 
        <p>CountryHub</p>
        <p>StepIT © 2024</p>
      </div>
    </div>
  );
};

export default Footer;
