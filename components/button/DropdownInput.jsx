import React, { useState } from "react";
import { InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap";
import styles from './DropdownInput.module.css'

function DropdownWithInput({ title, action1, action2, action3, add, placeholder, onChange }) {
 const [selectedValue, setSelectedValue] = useState(title);
 const [inputValue, setInputValue] = useState("");

 const handleActionSelect = (action) => {
    setSelectedValue(action);
    onChange(action);
 };

 const handleInputChange = (e) => {
    setInputValue(e.target.value);
 };

 return (
    <InputGroup className={styles.button}>
      <DropdownButton
        title={selectedValue}
        id="input-group-dropdown-1"
        variant="secondary"
      >
        <Dropdown.Item onClick={() => handleActionSelect(action1)}>
          {action1}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleActionSelect(action2)}>
          {action2}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleActionSelect(action3)}>
          {action3}
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => handleActionSelect(add)}>
          {add}
        </Dropdown.Item>
      </DropdownButton>
      <FormControl
        aria-label="Text input with dropdown button"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </InputGroup>
 );
}

export default DropdownWithInput;