import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Multiselect from 'multiselect-react-dropdown';
import {Box}   from '@mui/material'
import Slider from '@mui/material/Slider'
import hamburger from "../../assets/hamburgermenu.png";
import { useAppDispatch } from '../../utils/hooks';
import { getAllCountries, getCountriesByIndependency, getCountriesByPopulation, getCountriesByRegion } from '../../utils/actions';
import "./HamburgerMenu.css"


function HamburgerMenu() {

  const dispatch=useAppDispatch()



  // Hamburger Menu Start
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // Hamburger Menu End
  
  
  
  // Independency Filter Start
  
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

  // Independency Filter End

  

  // Region Filter Start

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
  

  // Region Filter End



  // Population Filter Start
  const [sliderValue, setSliderValue] = useState<number[]>([0, 1500000000]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number[]);
    dispatch(getCountriesByPopulation(sliderValue))
    
  };
  // Population Filter End

  

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
              <Box sx={{ width: 214 }}>
                <Slider
                  min={0}
                  max={1500000000}
                  getAriaLabel={() => 'Population'}
                  value={sliderValue}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
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