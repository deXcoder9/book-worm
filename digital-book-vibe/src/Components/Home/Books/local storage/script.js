const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("read-books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveBooks = (id) => {
  const storedBooks = getStoredBooks();
  const exist = storedBooks.find((book) => book.bookId == id.bookId);
  if (!exist) {
    storedBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedBooks));
    console.log("stored books:- ", storedBooks);
    console.log("params Id: -", id);
  }
};

export { saveBooks, getStoredBooks };
