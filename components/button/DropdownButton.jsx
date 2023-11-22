import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from './Dropdown.module.css'
import Link from "next/link";

export default function DropdownComponent() {
  return (

    <Dropdown>
       
       <Link href="/Add">
      <Dropdown.Toggle  id="dropdown-basic" className={styles.box}>
      Nova despesa
      </Dropdown.Toggle>
      </Link>
    

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Nova entrada</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Nova transferência</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}
