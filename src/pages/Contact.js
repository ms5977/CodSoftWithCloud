import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styles from '../styles/Contact.module.css'; // Custom CSS for contact page

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server or log it)
        console.log(formData);
    };

    return (
        <div>
            <Container>
                <Row className={styles.contactHeader}>
                    <Col>
                        <h1>Contact Us</h1>
                        <p>If you have any questions, feel free to reach out to us!</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="8" className={styles.contactFormContainer}>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="message">Message</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    placeholder="Enter your message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                />
                            </FormGroup>
                            <Button type="submit" color="primary">Send Message</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
