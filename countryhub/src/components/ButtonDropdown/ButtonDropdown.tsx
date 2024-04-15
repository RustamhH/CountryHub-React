import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import './ButtonDropdown.css'

const ButtonDropdown = () => {

  const [selectedCategory, setSelectedCategory] = useState('Name');

  const handleDropdownItemClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchClick = () => {
    // fetch for filtered search (selected category)
  };

  return (
    <div style={{ display: 'flex', gap: '45px', marginTop: '70px', justifyContent: 'center',marginBottom:'140px'}}>
      <div className="input-group" style={{boxShadow:'1px 1px 15px 0px #00000033',borderRadius:'0px 21px 21px 0px'}}>
        <input type="text" className="form-control" aria-label="Text input with dropdown button" />
        <div className="input-group-append">
          <Dropdown style={{backgroundColor:'#149CFF',borderRadius:'0px 21px 21px 0px'}}>
            <Dropdown.Toggle style={{color:'white',border:'none'}} variant="outline-secondary" id="dropdown-basic">
              {selectedCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Name')}>Name</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Full Name')}>Full Name</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDropdownItemClick('Code')}>Code</Dropdown.Item>
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