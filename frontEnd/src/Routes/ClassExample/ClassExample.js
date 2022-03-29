import React, { Component } from "react";
import Home from "../../Home";
import ClassBookList from "./ClassBookList";
import axios from "axios";

export default class ClassExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksDataState: [],
      categoriesDataState: [],
      publisherDataState: [],
    };
  }

  // In case of a functional component we'll use useEffect here.
  componentDidMount() {
    // APIs calls as functions
    this.bookDetailsAPI();
    this.publisherDetailsAPI();
    this.categoriesDetailsAPI();
  }

  // API call for book details
  bookDetailsAPI() {
    axios.get(`http://localhost:8080/api/BooksDetails`).then((res) => {
      const bookData = res.data;
      this.setState({ booksDataState: bookData });
    });
  }

  // API call for categories details
  publisherDetailsAPI() {
    axios.get(`http://localhost:8080/api/categorydetails`).then((res) => {
      const categoriesDataState = res.data;
      // console.log(publisherData);
      this.setState({categoriesDataState: categoriesDataState});
    });
  }

  // API call for publisher details.
  categoriesDetailsAPI() {
    axios.get(`http://localhost:8080/api/publisherdetails`).then((res) => {
      const publisherDataState = res.data;
      // console.log(categoryData);
      this.setState({publisherDataState:publisherDataState });
    });
  }

  render() {
    const { booksDataState, categoriesDataState, publisherDataState } =
      this.state;
    return (
      <div>
        <Home />
        <ClassBookList
          BookData={booksDataState}
          CategoriesData={categoriesDataState}
          PublisherData={publisherDataState}
        />
      </div>
    );
  }
}
