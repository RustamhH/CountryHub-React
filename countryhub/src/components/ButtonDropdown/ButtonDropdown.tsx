import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { getSearchedCountries } from '../../utils/actions';
import './ButtonDropdown.css'

const ButtonDropdown = () => {

  const [selectedCategory, setSelectedCategory] = useState('Name');
  const [name,setName]=useState("")
  const dispatch = useAppDispatch();


  const handleDropdownItemClick = (category:string) => {
    setSelectedCategory(category);
  };

  const handleSearchClick = () => {
    // fetch for filtered search (selected category)
    if(name!="") {
      let category=selectedCategory.toLowerCase()
      if(category=="language") {
        category="lang";
      }
      dispatch(getSearchedCountries(name,category))
    }
    
  };

  return (
    <div style={{ display: 'flex', gap: '45px', marginTop: '160px', justifyContent: 'center',marginBottom:'140px'}}>
      <div className="input-group" style={{boxShadow:'1px 1px 15px 0px #00000033',borderRadius:'0px 21px 21px 0px'}}>
        <input placeholder='Search' value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" aria-label="Text input with dropdown button" />
        <div className="input-group-append">
          <Dropdown style={{backgroundColor:'#149CFF',borderRadius:'0px 21px 21px 0px'}}>
            <Dropdown.Toggle style={{color:'white',border:'none'}} variant="outline-secondary" id="dropdown-basic">
              {selectedCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Name')}>Name</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Language')}>Language</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Capital')}>Capital</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <button className='searchButton' onClick={handleSearchClick}>Search</button>
    </div>
  );



};

export default ButtonDropdown;