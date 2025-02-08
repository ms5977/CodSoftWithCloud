import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from '../styles/Home.module.css';
import Chatbot from '../components/ChatBot';

export default function Home() {
    return (
        <>
            <div className={styles.homeImg}>
                <Container>
                    <Row className={styles.heading}>
                        <Col xs="12" md="8" lg="6" className="text-center">
                            <h1>Take Your Career to the Next Level with CodSoft</h1>
                            <h2>Join Our Exciting Internship Journey</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Chatbot />
        </>
    );
}
