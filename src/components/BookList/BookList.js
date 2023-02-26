import React from 'react';
import BookCard from '../BookCard/BookCard';

const BookList = () => {

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
                <BookCard />
            </div>
        </div>
    );
};

export default BookList;