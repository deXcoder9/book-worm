import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../Home/Books/local storage/script";
import ReadBooks from "./ReadBooks";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WishlistBooks from "./WishlistBooks";
import { getStoredWishlistedBooks } from "../Home/Books/local storage/wishlistxScript";


const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([])
    const [displayReadBook, setDisplayReadBook] = useState([]);
    const [wishlistedBooks, setWishlistedBooks] = useState([])
    const books = useLoaderData()
    // for read books
    useEffect(() => {
        const storedBooks = getStoredBooks()
        // console.log(storedBooks)
        if (books.length > 0) {
            const storedBooksIDs = storedBooks.map(book => book.bookId)
            const listedBooks = books.filter(book => storedBooksIDs.includes(book.bookId))
            setReadBooks(listedBooks)
            setDisplayReadBook(listedBooks);
        }
    }, [])

    const handleBookFilter = (filter) => {
        console.log(filter);

        if (filter === "default") {
            setDisplayReadBook(readBooks);
        } else if (filter === "sciencefiction") {
            const fantasyBook = readBooks.filter(
                (book) => book.category === "Science Fiction"
            );
            setDisplayReadBook(fantasyBook);
        } else if (filter === "fantasy") {
            const fantasyBook = readBooks.filter(
                (book) => book.category === "Fantasy"
            );
            setDisplayReadBook(fantasyBook);
        } else if (filter === "romance") {
            const fantasyBook = readBooks.filter(
                (book) => book.category === "Romance"
            );
            setDisplayReadBook(fantasyBook);
        }
    };
    // for wishlisted books
    useEffect(() => {
        const storedWIshBooksIds = getStoredWishlistedBooks()
        if (books.length > 0) {
            const wishlistedBooks = books.filter(book => storedWIshBooksIds.includes(book.bookId))
            setWishlistedBooks(wishlistedBooks)
        }
    }, [])

    const getOptionValue = () => {
        let optionName = document.getElementById("list").value;
        handleBookFilter(optionName)
    };
    return (
        <div className="my-10">

            <div>

                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>WishList Books</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <h1 className="text-sm font-bold underline">Total Books added: {readBooks.length}</h1>
                            <div className=" pt-5 flex justify-center flex-col lg:flex-row items-center font-bold  text-lg"> <span className="underline">Sort by:</span>
                                <select id="list" onChange={() => getOptionValue()} className="ml-2 border-2 px-3 flex justify-center item py-4 text-white border-none rounded-xl outline-none bg-black text-lg font-semibold">
                                    <option value="default">Default</option>
                                    <option value="fantasy">Fantasy</option>
                                    <option value="sciencefiction">Science Fiction</option>
                                    <option value="romance">Romance</option>
                                </select>
                            </div>
                            {
                                displayReadBook.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {
                            wishlistedBooks.map(book => <WishlistBooks key={book.bookId} book={book}></WishlistBooks>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;