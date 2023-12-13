import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from './Dropdown.module.css'
import Link from "next/link";

export default function DropdownButton({toggleText, action1Text, action2Text}) {
  return (
    <Dropdown>
      <Link href="/Add">
        <Dropdown.Toggle id="dropdown-basic" className={styles.box}>
          {toggleText}
        </Dropdown.Toggle>
      </Link>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">{action1Text}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{action2Text}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
