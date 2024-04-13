import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const CountryInfo = () => {
  const navigate = useNavigate();
    return (
      <div>
        <Header></Header>
        <button className='backbutton' onClick={() => navigate("/")}>Back</button>
        <main>COUNTRY INFO</main>
        <Footer></Footer>
      </div>
    );
};
  
export default CountryInfo;