import Footer from "../Footer";
import Header from "../Header";
import { useNavigate,useLocation } from "react-router-dom";
import './CountryInfo.css'

const CountryInfo = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
    return (
      <div>
        <Header></Header>
        <div style={{display:'flex'}}>


          <button className='searchButton' onClick={() => navigate("/")}>Back</button>
          <div className="left-section">
            <p className="big-title">Names:</p>
            
            <div className="text-row">
              <p className="small-title">Common:</p>
              <p className="prop">{state.commonName}</p>
            </div>

            <div className="text-row">
              <p className="small-title">Official:</p>
              <p className="prop">{state.officialName}</p>
            </div>


            <p className="big-title">Native names:</p>
            
            <div className="text-row">
              <p className="small-title">Common:</p>
              <p className="prop">{state.commonNativeName}</p>
            </div>

            <div className="text-row">
              <p className="small-title">Official:</p>
              <p className="prop">{state.officialNativeName}</p>
            </div>


            <div className="text-row">
              <p className="big-title">Capital:</p>
              <p className="prop">{state.capital}</p>
            </div>
            <div className="text-row">
              <p className="big-title">Region:</p>
              <p className="prop">{state.region}</p>
            </div>
            <div className="text-row">
              <p className="big-title">Subregion:</p>
              <p className="prop">{state.subregion}</p>
            </div>
            <div className="text-row">
              <p className="big-title">Population:</p>
              <p className="prop">{state.population}</p>
            </div>
           

            <p className="big-title">Currencies:</p>
            
            <div className="text-row">
              <p className="small-title">Name:</p>
              <p className="prop">{state.currencyName}</p>
            </div>

            <div className="text-row">
              <p className="small-title">Symbol:</p>
              <p className="prop">{state.currencySymbol}</p>
            </div>




          
          </div>

          <div className="right-section">
            <img src={state.flag} alt="" />
            <img className="coatimage" src={state.coatOfArms} alt="" />
          </div>






        </div>
        <Footer></Footer>
      </div>
    );
};
  
export default CountryInfo;