import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <Container>
                <Row>
                    <Col>
                        <h1 className={styles.mainHeading}>Get to know us</h1>
                        <h4 className={styles.subHeading}>CodSoft is an IT services and consultancy company that specializes in creating innovative solutions for businesses. We are passionate about technology and believe in the power of software to transform the world. Our internship program is just one of the ways in which we are investing in the future of the industry.</h4>
                        <h4 className={styles.subHeading}>At CodSoft, we believe practical knowledge is the key to success in the tech industry. Our aim is to help students lacking basic skills by offering hands-on learning through live projects and real-world examples. Our team consists of industry experts who are dedicated to equipping interns with the knowledge and skills needed to succeed in their careers. We foster an inclusive and supportive environment that encourages learning, growth, and creativity.</h4>
                    </Col>
                </Row>

                <Row className={styles.missionSection}>
                    <Col>
                        <h2 className={styles.sectionHeading}>Our Mission</h2>
                        <p className={styles.sectionContent}>
                            Software development is an iterative process, and the mission includes continually improving software solutions. This entails gathering feedback, identifying areas for enhancement, and implementing updates to make the software more efficient, user-friendly, and reliable. Continuous improvement also involves staying up to date with the latest technologies, tools, and industry trends.
                        </p>
                    </Col>
                </Row>

                <Row className={styles.visionSection}>
                    <Col>
                        <h2 className={styles.sectionHeading}>Our Vision</h2>
                        <p className={styles.sectionContent}>
                            The vision of software development is to create innovative solutions that push the boundaries of technology. This involves leveraging emerging technologies, exploring new ideas, and developing software that brings novel approaches to solving problems and improving the lives of users.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
