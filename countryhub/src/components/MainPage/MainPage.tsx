import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { getAllCountries } from '../../utils/actions';
import money from "../../assets/moneylogo.png";
import population from "../../assets/populationlogo.png";
import './MainPage.css'
import ButtonDropdown from '../ButtonDropdown/ButtonDropdown';

const MainPage = () => {
  
  const {list,isLoading,error} = useAppSelector((state) => state.fetchReducer);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  
 
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
    



      


    
        <div>
          <ButtonDropdown></ButtonDropdown>
        </div>
      
        





        <div className="country-list">
          {list.map((country, index) => (


            
            <Link to={`/${country.name.common}`} style={{textDecoration:'none',color:'black'}}>
            
            <div key={index} className="country-list-item">
            <img className='country-image' src={country.flags.png}/>
            <div className='country-item-texts'>
            <p className='title-text'>{country.name.common}</p>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <img style={{width:'24px', height:'24px'}} src={population} alt="" />
                <p>{country.population}</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <img style={{width:'24px', height:'24px'}} src={money} alt="" />
                <p>{(country.currencies != null ? Object.values(country.currencies)[0].symbol : ' ')}</p>
            </div>
            </div>
            
            </div>
            
            
            </Link>
          
          ))}
        </div>



    </div>
  );
};

export default MainPage;