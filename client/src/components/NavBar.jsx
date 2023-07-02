import React from 'react'
import { Navbar, Nav, Container, Image, Button, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'
import { logoutUser } from '../actions/userAction';

const NavBar = () => {
  const dispatch = useDispatch()
  const cartState = useSelector(state => state.cartReducer)
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState

  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#0dcaf0" }}>
        <Container>
          <Navbar.Brand>

            <a href='/' ><Image src='images/logo.png' alt='logo'
              style={{ height: "50px", cursor: "pointer", }} /></a>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" >
              {
                currentUser ? (<LinkContainer to='/'>

                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to='/orders'>
                      <NavDropdown.Item>orders</NavDropdown.Item>
                    </LinkContainer>


                    <NavDropdown.Item onClick={() => { dispatch(logoutUser()) }}>Logout</NavDropdown.Item>

                  </NavDropdown>

                </LinkContainer>) : (
                  <>
                    {" "}
                    <LinkContainer to='/login'>
                      <Nav.Link><Button className="btn btn-outline-light">Login</Button></Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/register'>
                      <Nav.Link> <Button className="btn btn-outline-light" > Register</Button></Nav.Link>
                    </LinkContainer>
                    {" "}
                  </>
                )}


              <LinkContainer to="/cart">
                <Nav.Link><Button className="btn btn-outline-light" >Cart {cartState.cartItems.length}</Button></Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
