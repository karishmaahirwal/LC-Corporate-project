const express = require("express");
const router = express.Router();
const Book = require("../controller/Book")
const auth = require("../auth/adminMiddleware");




// post Register from Books
router.post("/register", Book.Register);
// post login from Books
router.post("/login", Book.login);

// get books
router.get("/get/book", Book.getBooks);
router.post("/get/book", Book.getBooks);

// add book
router.post("/add/book", auth, Book.addBook);

// get all books
router.get("/get/all/book", Book.getBooks);

// delete book
router.delete("/delete/book/:id", Book.deleteBook);

// update book
router.patch("/update/book/:id", Book.updateBook);

// get particular book
router.get("/get/particular/book/:name", Book.getParticularBook);

// get all books (plural)
router.get("/get/all/books", Book.getBooks);

module.exports = router;