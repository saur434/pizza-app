import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Policy = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <h1 style={{textAlign:"center"}}>Terms and Conditions</h1>
                <hr/>
                <Row>
                    <Col md={10} >
                    <h5>Information For Users</h5>
                        <p>
                        In order to use certain features of the Service, Users will need to provide their personal information or establish an account.  To set up an account on the Service, Users will have to provide a User Name, password, active email address, physical mailing address, mobile phone number, and phone number. You may only create one account per person. 
                        </p>
                        <h5>Ordering</h5>
                        <p>
                        Customers can typically place orders through various channels such as in-person, phone, or online platforms.
                        </p>

                        <h5>Menu</h5>
                        <p>
                        The pizza store will have a menu that lists the available pizzas, toppings, sides, drinks, and any other items they offer.
                        </p>

                        <h5>Pricing</h5>
                        <p>
                        Prices for pizzas and other items should be clearly displayed on the menu or website. Additional charges may apply for extra toppings, delivery, or special requests. The store may offer delivery services within a certain radius. They may have a minimum order requirement or charge a delivery fee. Takeout options may also be available. Accepted forms of payment, such as cash, credit cards, or digital wallets, should be specified. Online payment options should be secure.
                        </p>

                        <h5>Allergies and Dietary Restrictions</h5>
                        <p>
                        The pizza store may provide information about common allergens present in their ingredients. They may also offer gluten-free, vegan, or other specialized options.The store will have specific opening and closing hours, and they may vary on different days of the week.Some pizza stores offer loyalty programs that reward customers with points or discounts for repeat orders.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Policy
