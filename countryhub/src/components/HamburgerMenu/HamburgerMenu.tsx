import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Multiselect from 'multiselect-react-dropdown';
import {Box}   from '@mui/material'
import Slider from '@mui/material/Slider'
import hamburger from "../../assets/hamburgermenu.png";
import { useAppDispatch } from '../../utils/hooks';
import { getAllCountries, getCountriesByIndependency, getCountriesByRegion } from '../../utils/actions';
import "./HamburgerMenu.css"


function HamburgerMenu() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  
  
  const dispatch=useAppDispatch()
  
  
  const [selectedItem, setSelectedItem] = useState("All");
  const handleItemClick = (item:any) => {
    setSelectedItem(item);
    if(item=="All") {
      dispatch(getAllCountries())
    }
    else {
      dispatch(getCountriesByIndependency(item))
    }
  };

  
  const options = [{name:'Europe'},{name:'Asia'},{name:'Africa'},{name:'Americas'},{name:'Oceania'}]
  

  const handleSelect = (selectedList:object[]) => {
    let newList:string[]=[]
    selectedList.forEach(element => {
      newList.push(element.name.toLowerCase())
    });

    dispatch(getCountriesByRegion(newList))
  };

  const handleRemove = (selectedList:object[]) => {
    let newList:string[]=[]
    selectedList.forEach(element => {
      newList.push(element.name.toLowerCase())
    });

    dispatch(getCountriesByRegion(newList))
  };
  
  const [sliderValue, setSliderValue] = useState([450, 1430000000]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };


  

  return (
    <>
      <button style={{backgroundColor:'transparent',border:'none',cursor:'pointer'}} onClick={handleShow}><img src={hamburger}/></button>
        

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='hamburger-title-text'>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='hamburger-body'>
            <div className='independent'>
              <p style={{fontSize:'20px'}}>Independent</p>
              
              
              <div className="custom-radio-group">
                <div
                  className={`custom-radio-item ${selectedItem === 'All' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('All')}
                >
                  All
                </div>
                <div
                  className={`custom-radio-item ${selectedItem === 'Yes' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('Yes')}
                >
                  Yes
                </div>
                <div
                  className={`custom-radio-item ${selectedItem === 'No' ? 'selected' : ''}`}
                  onClick={() => handleItemClick('No')}
                >
                No
                </div>
              </div>


            </div>
            <div className='region'>
              <p style={{fontSize:'20px'}} className='pt-1'>Region</p>
              <Multiselect
                options={options}
                onSelect={handleSelect}
                onRemove={handleRemove}
                displayValue="name"
                className="multiselect"
              />
            </div>
            <div className='population'>
              <p style={{fontSize:'20px'}}>Population</p>
              <Box sx={{ width: 210 }}>
                <Slider
                  min={450}
                  max={1430000000}
                  value={sliderValue}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  ariaLabel="Population"
                />
              </Box>
              
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HamburgerMenu;