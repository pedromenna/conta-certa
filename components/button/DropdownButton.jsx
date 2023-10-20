import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Dropdown } from "react-bootstrap";

export default function DropdownComponent() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Dropdown link
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
