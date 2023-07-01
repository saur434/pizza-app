import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '18rem', marginTop: '30px', backgroundColor: 'white', boxShadow: '3px 2px 10px 0px' }}>
        <Card.Img variant="top" src={pizza.image} style={{ height: '230px', cursor: 'pointer' }} onClick={handleShow} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <h6>Size</h6>
                  </td>
                  <td>
                    <select
                      className="form-control"
                      value={varient}
                      onChange={(e) => setVarient(e.target.value)}
                    >
                      {pizza.varients.map((variant) => (
                        <option key={variant}>{variant}</option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Quantity</h6>
                  </td>
                  <td>
                    <select
                      className="form-control"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      {[...Array(10).keys()].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card.Text>
          <Row>
            <Col md={6}>Price: {pizza.prices[0][varient] * quantity} ₹</Col>
            <Col md={6}>
              <Button variant="warning" onClick={addToCartHandler}>
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img variant="top" src={pizza.image} style={{ height: '200px' }} />
          </div>
          <div>
            <h5>Description</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
