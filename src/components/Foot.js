import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink
import styles from '../styles/Foot.module.css';  // Import custom footer styles

export default function Foot() {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row>
                    {/* Company Information */}
                    <Col xs="12" md="4" className={styles.companyInfo}>
                        <h5>Copyright ©2023 CODSOFT. All Rights Reserved</h5>
                        <p>Designed By Team CODSOFT</p>
                        <p>Email: <NavLink to="mailto:contact@codsoft.in" className={styles.emailLink}>contact@codsoft.in</NavLink></p>
                    </Col>

                    {/* Useful Links */}
                    <Col xs="12" md="4" className={styles.links}>
                        <h5>Useful Links</h5>
                        <ul>
                            <li><NavLink to="/privacy-policy" className={styles.navLink}>Privacy Policy</NavLink></li>
                            <li><NavLink to="/refund-policy" className={styles.navLink}>Refund Policy</NavLink></li>
                            <li><NavLink to="/terms" className={styles.navLink}>Terms and Conditions</NavLink></li>
                        </ul>
                    </Col>

                    {/* Contact Information */}
                    <Col xs="12" md="4" className={styles.contactInfo}>
                        <h5>Contact Info</h5>
                        <p>Lokenath Bose Garden Lane, Kolkata, West Bengal</p>
                        <h5>Subscribe for Daily Updates</h5>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className={styles.emailInput}
                        />
                        <button className={styles.subscribeBtn}>Join Our Mailing List</button>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
