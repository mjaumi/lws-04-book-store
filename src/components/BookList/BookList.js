import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../../redux/books/thunk/fetchBooks';
import BookCard from '../BookCard/BookCard';

const BookList = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();
    const bookList = useSelector(state => state?.books);

    // fetching all the books from server here
    useEffect(() => {
        dispatch(fetchBooks);
    }, [dispatch]);

    // rendering book list component here
    return (
        <div className='order-2 xl:-order-1'>
            <div className='flex items-center justify-between mb-12'>
                <h4 className='mt-2 text-xl font-bold'>Book List</h4>

                <div className='flex items-center space-x-4'>
                    <button className='filter-btn active-filter' id='lws-filterAll'>All</button>
                    <button className='filter-btn' id='lws-filterFeatured'>Featured</button>
                </div>
            </div>
            <div className='lws-bookContainer'>
                {
                    bookList?.map(book => <BookCard
                        key={book.id}
                        book={book}
                    />)
                }
            </div>
        </div>
    );
};

export default BookList;