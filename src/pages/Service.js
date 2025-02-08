import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import webImg from '../assests/images/webDev.jpg';
import mobapp from '../assests/images/mobileapp.avif';
import mark from '../assests/images/digitMark.jpg';
import ecomm from '../assests/images/ecommerce.jpg';
import supp from '../assests/images/support.jpg';
import cloud from '../assests/images/cloud.jpg';

export default function Services() {
    return (
        <Container className="my-5">
            <h2 className="text-center my-4">Our Services</h2>
            <Row className="justify-content-center">
                <Col md="4" sm="6" className="mb-4">
                    <Card>
                        <CardImg top width="100%" src={webImg} alt="Service 1" />
                        <CardBody>
                            <CardTitle tag="h5">Web Development</CardTitle>
                            <CardText>
                                We provide high-quality web development services to bring your ideas to life. Our expert team specializes in building responsive and user-friendly websites tailored to your business needs.
                            </CardText>
                            <Button>Learn More</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                    <Card>
                        <CardImg top width="100%" src={mobapp} alt="Service 2" />
                        <CardBody>
                            <CardTitle tag="h5">Mobile App Development</CardTitle>
                            <CardText>
                                We design and develop mobile applications that offer seamless user experiences, whether it's iOS or Android.
                            </CardText>
                            <Button>Learn More</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                    <Card>
                        <CardImg top width="100%" src={mark} alt="Service 3" />
                        <CardBody>
                            <CardTitle tag="h5">Digital Marketing</CardTitle>
                            <CardText>
                                We help businesses grow through targeted digital marketing strategies, including SEO optimization and social media campaigns.
                            </CardText>
                            <Button>Learn More</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                    <Card>
                        <CardImg top width="100%" src={ecomm} alt="Service 4" />
                        <CardBody>
                            <CardTitle tag="h5">E-Commerce Solutions</CardTitle>
                            <CardText>
                                Custom-built online stores that are secure, fast, and optimized for a great user experience.
                            </CardText>
                            <Button>Learn More</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                    <Card>
                        <CardImg top width="100%" src={cloud} alt="Service 5" />
                        <CardBody>
                            <CardTitle tag="h5">Cloud Solutions</CardTitle>
                            <CardText>
                                Scalable and secure cloud solutions that enhance performance, flexibility, and cost-efficiency.
                            </CardText>
                            <Button>Learn More</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" sm="6" className="mb-4">
                    <Card>
                        <CardImg top width="100%" src={supp} alt="Service 6" />
                        <CardBody>
                            <CardTitle tag="h5">IT Consultancy & Support</CardTitle>
                            <CardText>
                                Expert consultancy and support services to solve your technology challenges and improve your business operations.
                            </CardText>
                            <Button>Learn More</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
