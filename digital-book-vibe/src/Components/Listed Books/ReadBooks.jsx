
import PropTypes from 'prop-types';

const ReadBooks = ({ book }) => {

    const { rating, yearOfPublishing, publisher, totalPages, tags, category, author, bookName, image } = book;
    return (

        <div>
            <div className="flex flex-col place-items-center lg:flex-row gap-x-6 books-card p-6 my-4 ">
                <div className="books-bg w-[230px] h-[230px]">
                    <img className="w-32" src={image} alt="book-image" />
                </div>
                <div>
                    <h2 className="text-xl font-bold pb-2">{bookName}</h2>
                    <p className="text-sm pb-5 text-gray-600 font-semibold">By: {author}</p>
                    <p className="pb-4 flex flex-col lg:flex-row "><span className="font-bold text-[17px]" > Tags:</span>
                        <div className='flex flex-col lg:flex-row'>
                            {
                                tags.map((tag, idx) => <span className="px-4 text-purple-800  " key={idx}> #{tag} </span>)
                            }
                        </div>
                        <span>Year of Publishing: {yearOfPublishing}</span>
                    </p>
                    <div className="flex gap-x-8 text-sm pb-4 text-gray-500">
                        <p>Publisher: {publisher}</p>
                        <p>Page: {totalPages}</p>
                    </div>
                    <hr />
                    <div className="flex items-center gap-x-3 pt-5">
                        <h6 className=" readBook-category-bg ">Category: {category}</h6>
                        <h6 className="readBook-rating-bg">Rating: {rating}</h6>
                        <button className=" p-[9px] text-[14px] bg-black text-white rounded-3xl">View Details</button>
                    </div>
                </div>
            </div >
        </div>
    );
};


ReadBooks.propTypes = {
    book: PropTypes.object,
}

export default ReadBooks;