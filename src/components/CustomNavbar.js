import React, { useState } from 'react';
import styles from '../styles/CustomNavbar.module.css';
import { NavLink as ReactLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function CustomNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className={styles.NavBackground} expand="md">
            <NavbarBrand className={styles.navContent} tag={ReactLink} to="/">CodSoft</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <NavLink
                            className={styles.navContent}
                            tag={ReactLink}
                            to='/'
                            activeClassName={styles.activeLink}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={styles.navContent}
                            tag={ReactLink}
                            to='/about'
                            activeClassName={styles.activeLink}
                        >
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={styles.navContent}
                            tag={ReactLink}
                            to='/contact'
                            activeClassName={styles.activeLink}
                        >
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={styles.navContent}
                            tag={ReactLink}
                            to='/services'
                            activeClassName={styles.activeLink}
                        >
                            Services
                        </NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink
                            className={styles.navContent}
                            tag={ReactLink}
                            to='/portfolio'
                            activeClassName={styles.activeLink}
                        >
                            Portfolio
                        </NavLink>
                    </NavItem> */}
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
