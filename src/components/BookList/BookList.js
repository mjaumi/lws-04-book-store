import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../../redux/books/thunk/fetchBooks';
import { statusChanged } from '../../redux/filters/actionCreators';
import BookCard from '../BookCard/BookCard';

const BookList = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();
    const bookList = useSelector(state => state?.books);
    const filter = useSelector(state => state.filters);

    // fetching all the books from server here
    useEffect(() => {
        dispatch(fetchBooks);
    }, [dispatch]);

    // handler function to handle the status changing of filter
    const statusChangeHandler = (status) => {
        dispatch(statusChanged(status));
    }

    // this function is filtering the books based on featured
    const filterByFeatured = (book) => {
        switch (filter.status) {
            case 'Featured':
                return book.featured;

            default:
                return book;
        }
    }

    // rendering book list component here
    return (
        <div className='order-2 xl:-order-1'>
            <div className='flex items-center justify-between mb-12'>
                <h4 className='mt-2 text-xl font-bold'>Book List</h4>

                <div className='flex items-center space-x-4'>
                    <button onClick={() => statusChangeHandler('All')} className={`filter-btn ${filter.status === 'All' && 'active-filter'}`} id='lws-filterAll'>All</button>
                    <button onClick={() => statusChangeHandler('Featured')} className={`filter-btn ${filter.status === 'Featured' && 'active-filter'}`} id='lws-filterFeatured'>Featured</button>
                </div>
            </div>
            <div className='lws-bookContainer'>
                {
                    bookList
                        .filter(filterByFeatured)
                        .map(book => <BookCard
                            key={book.id}
                            book={book}
                        />)
                }
            </div>
        </div>
    );
};

export default BookList;