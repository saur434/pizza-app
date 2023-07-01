import React from 'react'
import { Container, Row, Col, Table,Image } from 'react-bootstrap'
import { AiTwotonePhone } from 'react-icons/ai';
import { FaMobileAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
    return (
        <>
            <Container style={{ marginTop: "50px", alignContent:'center' }}>
                <Row>
                    <Col md={6}>
                        <h1>Pizza Hub</h1>
                        <p>For any query contact us on the following details</p>
                        <Table striped bordered hover className='text-center'>
                            <thead>
                                <tr>
                                    <th className='bg-warning text-center' colSpan={3}>----Contact Details----</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><AiTwotonePhone /></td>
                                    <td>Phone</td>
                                    <td>+91-9689962655</td>

                                </tr>

                                <tr>
                                    <td><FaMobileAlt /></td>
                                    <td>Call</td>
                                    <td>+91-9253684512</td>


                                </tr>

                                <tr>

                                    <td><AiOutlineMail /></td>
                                    <td>Email</td>
                                    <td>pizzahub23@gmail.com</td>

                                </tr>


                            </tbody>
                        </Table>
                    </Col>
                    <Col md = {6}>
                        <Image src='images/farmhouse.jpg' style={{width:"500px", height:'300px' }}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Contact
