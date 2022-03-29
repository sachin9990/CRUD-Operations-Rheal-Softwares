import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./EditBook.css";
import axios from "axios";

export default function EditBook() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const { bookId } = useParams();
  const isAdd = !bookId;

  // Hook for category name in the dropdown
  const [categoryData, setCategorydata] = useState([]);
  const [publisherData, setPublisherData] = useState([]);

  // useEffect similar to componentDidMount
  useEffect(() => {
    if (!isAdd) {
      axios
        .get(`http://localhost:8080/api/BooksDetails/${bookId}`)
        .then((res1) => {
          const bookDataState = res1.data;
          const fields = [
            "BDID",
            "Bookname",
            "Category",
            "Publisher",
            "quantity",
          ];
          fields.forEach((field) => {
            setValue(field, bookDataState[field]);
          });
        });
    }
  }, []);

  // Fetching category data for dropdown
  useEffect(() => {
    axios.get("http://localhost:8080/api/CategoryDetails").then((response) => {
      const categoryData = response.data;
      setCategorydata(categoryData);
    });

    axios.get("http://localhost:8080/api/PublisherDetails").then((response) => {
      const publisherData = response.data;
      setPublisherData(publisherData);
    });
  });

  // "data" is an object that contains the information submitted in each of the input field.
  // This "data" is received only when the data is submitted. The data will only be submitted only after validations.
  function onSubmit(data) {
    return isAdd ? createUser(data) : updateUser(bookId, data);
  }

  // API for create data.
  function createUser(data) {
    const addData = {
      data: data,
    };
    axios
      .post("http://localhost:8080/api/BooksDetails/add/", addData)
      .then((res) => {
        console.log(res.data);
      });
  }

  // API for Update Data Sachin
  function updateUser(id, data) {
    const editData = {
      id: id,
      data: data,
    };

    axios
      .post("http://localhost:8080/api/BooksDetails/edit/", editData)
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <Container>
      <Row>
        <Col md="10">
          <label>Edit Book Details</label>
        </Col>
        <Col md="2">
          <Button
            onClick={() => {
              navigate("/classexample");
            }}
          >
            Back
          </Button>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book ID</Form.Label>
          <Form.Control
            name="BDID"
            {...register("BDID")}
            type="text"
            placeholder="Enter Book ID"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            name="Bookname"
            {...register("Bookname")}
            type="text"
            placeholder="Enter Book Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category Name</Form.Label>

          <div>
            <select className="btn btn-secondary dropdown-toggle" {...register("Category.Name")}>
              {categoryData.map((item) => {
                return <option>{item.Name}</option>;
              })}
            </select>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Publisher Name</Form.Label>
          <div>
            <select className="popup-input" {...register("Publisher.Name")}>
              {publisherData.map((item) => (<option >{item.Name}</option>))}
            </select>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            name="quantity"
            {...register("quantity")}
            type="text"
            placeholder="Enter Quantity"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save changes
        </Button>
      </Form>
    </Container>
  );
}
