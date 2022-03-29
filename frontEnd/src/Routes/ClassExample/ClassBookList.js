import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ClassBookList.css";

export default class ClassBookList extends Component {
  render() {
    const { BookData, CategoriesData, PublisherData } = this.props;

    

    const bookDataRows = BookData.map((bookDetails) => {
      return (
        <tr key={bookDetails.BDID}>
          <td>{bookDetails.BDID}</td>
          <td>{bookDetails.Bookname}</td>
          <td>{bookDetails.Category.Name}</td>
          <td>{bookDetails.Publisher.Name}</td>
          <td>{bookDetails.quantity}</td>
          <td>
            <Link to={`/EditBook/${bookDetails.BDID}`} style={{ color: `white` }}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </Link>
          </td>
          <td>
            <i
              className="fa fa-trash"
              style={{ color: `red` }}
              aria-hidden="true"
            ></i>
          </td>
        </tr>
      );
    });

    const categoryDataRows = CategoriesData.map((catData) => {
      return (
        <tr key={catData._id}>
          <td>{catData.categoryid}</td>
          <td>{catData.Name}</td>
          <td>
            <Button>Edit</Button>
          </td>
          <td>
            <Button>Delete</Button>
          </td>
        </tr>
      );
    });

    const publisherDataRows = PublisherData.map((pubData) => {
      return (
        <tr key={pubData._id}>
          <td>{pubData.publisherid}</td>
          <td>{pubData.Name}</td>
          <td>
            <Button>Edit</Button>
          </td>
          <td>
            <Button>Delete</Button>
          </td>
        </tr>
      );
    });

    return (
      <Container>
        <Row>
          <Col md="10">
            <h3>BookList Details</h3>
          </Col>
          <Col md="2">
            <Link to="/addBook">
              <Button variant="success">Add Book</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <table className="flat-table flat-table-1">
              <tbody>
                <tr className="book-tr">
                  <th>BookID</th>
                  <th>BookName</th>
                  <th>Category Name</th>
                  <th>Publisher Name</th>
                  <th>Quantity</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                {bookDataRows}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <Col>
            <table className="flat-table flat-table-2">
              <tbody>
                <tr>
                  <th>Category ID</th>
                  <th>Category Name</th>
                </tr>
                {categoryDataRows}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <Col>
            <table className="flat-table flat-table-3">
              <tbody>
                <tr>
                  <th>Publisher ID</th>
                  <th>Publisher Name</th>
                </tr>
                {publisherDataRows}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    );
  }
}
