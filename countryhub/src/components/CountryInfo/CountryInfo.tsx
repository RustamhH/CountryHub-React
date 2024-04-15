import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const CountryInfo = () => {
  const navigate = useNavigate();
    return (
      <div>
        <Header></Header>
        <main>COUNTRY INFO</main>
        <button className='backbutton' onClick={() => navigate("/")}>Back</button>
        <Footer></Footer>
      </div>
    );
};
  
export default CountryInfo;