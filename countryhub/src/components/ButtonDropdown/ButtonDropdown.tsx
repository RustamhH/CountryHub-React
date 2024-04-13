import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import './ButtonDropdown.css'

const ButtonDropdown = () => {

  const [selectedCategory, setSelectedCategory] = useState('Categories');

  const handleDropdownItemClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchClick = () => {
    // fetch for filtered search (selected category)
  };

  return (
    <div style={{ display: 'flex', gap: '45px', alignItems: 'center', marginTop: '70px', justifyContent: 'center' }}>
      <div className="input-group">
        <input type="text" className="form-control" aria-label="Text input with dropdown button" />
        <div className="input-group-append">
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
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