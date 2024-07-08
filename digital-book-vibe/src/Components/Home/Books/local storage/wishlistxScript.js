import { toast } from "react-toastify";

const getStoredWishlistedBooks = () => {
  const storedBooks = localStorage.getItem("wishlisted-books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveWishlistedBooks = (id) => {
  const storedBooks = getStoredWishlistedBooks();
  const exist = storedBooks.find((bookid) => bookid == id);
  if (!exist) {
    storedBooks.push(id);
    localStorage.setItem("wishlisted-books", JSON.stringify(storedBooks));
  }
};

const findStoredBook = (id) => {
  const arrayOfIds = [];
  const news = localStorage.getItem("read-books");
  let gettheValueOfReadBOok = [];
  if (news) {
    gettheValueOfReadBOok = JSON.parse(news);
  }
  for (const data of gettheValueOfReadBOok) {
    arrayOfIds.push(data);
    var i = arrayOfIds.find((value) => value.bookId === id);
  }
  if (i) {
    toast.error("This Book is already done reading");
  } else {
    toast.success("Successfully added to the WishLisht");
    saveWishlistedBooks(id);
  }
};

export { saveWishlistedBooks, getStoredWishlistedBooks, findStoredBook };
