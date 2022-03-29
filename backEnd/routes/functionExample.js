//  Importing all the schemas
const bookDetails = require("../models/BookDetailsSchema");
const CategoryDetailsLKP = require("../models/CategoryDetailsSchemaLKP");
const PublisherDetailsLKP = require("../models/PublisherDetailsSchemaLKP");

module.exports = (app) => {
  // API for bookDetails
  app.get("/api/BooksDetails", (req, res) => {
    bookDetails
      .find({ IsActive: "true" })
      .populate("Category")
      .populate("Publisher")
      .exec((err, bookDetails) => {
        return res.send(bookDetails);
      });
  });

  // API for finding the BookID
  app.get("/api/BooksDetails/:bookId", (req, res) => {
    bookDetails
      .findOne({ BDID: req.params.bookId })
      .populate("Category")
      .populate("Publisher")
      .exec((err, result) => {
        return res.send(result);
      });
  });

  // API for editData Sachin
  app.post("/api/BooksDetails/edit/", (req, res) => {
    
    CategoryDetailsLKP.findOne(
      { Name: req.body.data.Category.Name },
      (err, found1) => {
        PublisherDetailsLKP.findOne(
          { Name: req.body.data.Publisher.Name },
          (err, found2) => {
            bookDetails.findOne({ BDID: req.body.id }, (err, found3) => {
              if (found3) {
                found3.Bookname = req.body.data.Bookname;
                found3.Category = found1._id;
                found3.Publisher = found2._id;
                found3.quantity = req.body.data.quantity;
                return found3.save((err) => {
                  return res.send({ status: "OK" });
                });
              }
            });
          }
        );
      }
    );
  });

    // API for create data.
  app.post("/api/BooksDetails/add/", (req, res) => {
    CategoryDetailsLKP.findOne(
      { Name: req.body.data.Category.Name },
      (err, found1) => {
        PublisherDetailsLKP.findOne(
          { Name: req.body.data.Publisher.Name },
          (err, found2) => {
            bookDetails.findOne({ BDID: req.body.data.BDID }, (err, found3) => {
              if (!found3) {
                const newData = new bookdetails();
                newData.BDID = req.body.data.BDID;
                newData.Bookname = req.body.data.Bookname;
                newData.Category = found1._id;
                newData.Publisher = found2._id;
                newData.quantity = req.body.data.quantity;
                return newData.save((err) => {
                  return res.send({ status: "OK" });
                });
              }
            });
          }
        );
      }
    );
  });

  //   API for Category Table
  app.get("/api/categorydetails", (req, res) => {
    CategoryDetailsLKP.find().exec((err, categorydetails) => {
      return res.send(categorydetails);
    });
  });

  //   API for Publisher Table
  app.get("/api/publisherdetails", (req, res) => {
    PublisherDetailsLKP.find().exec((err, publisherDetails) => {
      return res.send(publisherDetails);
    });
  });

  return app;
};
