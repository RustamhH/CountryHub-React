import Footer from "../Footer";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import maplogo from "../../assets/maplogo.png"
import './CountryInfo.css'

const CountryInfo = () => {
  const { state } = useLocation();
    return (
      <div>
        <Header></Header>
        <div style={{display:'flex'}}>


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
            <img src={state.flag} alt="Flag" />
            <img className="coatimage" src={state.coatOfArms} alt="Coat of Arms" />
            <a href={state.map}><img src={maplogo} alt="" /></a>
          </div>






        </div>
        <Footer></Footer>
      </div>
    );
};
  
export default CountryInfo;