import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookDetails } from '../../redux/books/actionCreators';
import addBook from '../../redux/books/thunk/addBook';
import updatedBook from '../../redux/books/thunk/updateBook';

const BookForm = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();
    const editBookInfo = useSelector(state => state.books.editBook);

    // handler function to handle submitting book form
    const submitBookFormHandler = e => {
        e.preventDefault();

        let bookData = {
            name: e.target.name.value,
            author: e.target.author.value,
            thumbnail: e.target.thumbnail.value,
            price: parseInt(e.target.price.value),
            rating: parseInt(e.target.rating.value),
            featured: e.target.featured.checked,
        }

        if (editBookInfo?.name) {
            bookData = {
                ...bookData,
                id: editBookInfo.id,
            }
            dispatch(updatedBook(bookData));
        } else {
            dispatch(addBook(bookData));
        }

        dispatch(getBookDetails(0));
        e.target.featured.defaultChecked = false;
        e.target.reset();
    }

    // rendering book form component here
    return (
        <div className='p-4 overflow-hidden bg-white shadow-cardShadow rounded-md'>
            <h4 className='mb-8 text-xl font-bold text-center'>Add New Book</h4>
            <form onSubmit={submitBookFormHandler} className='book-form'>
                <div className='space-y-2'>
                    <label htmlFor='name'>Book Name</label>
                    <input required className='text-input' type='text' id='input-Bookname' name='name' defaultValue={editBookInfo?.name} />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='category'>Author</label>
                    <input required className='text-input' type='text' id='input-Bookauthor' name='author' defaultValue={editBookInfo?.author} />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='image'>Image Url</label>
                    <input required className='text-input' type='text' id='input-Bookthumbnail' name='thumbnail' defaultValue={editBookInfo?.thumbnail} />
                </div>

                <div className='grid grid-cols-2 gap-8 pb-4'>
                    <div className='space-y-2'>
                        <label htmlFor='price'>Price</label>
                        <input required className='text-input' type='number' id='input-Bookprice' name='price' defaultValue={editBookInfo?.price} />
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='quantity'>Rating</label>
                        <input required className='text-input' type='number' id='input-Bookrating' name='rating' min='1' max='5' defaultValue={editBookInfo?.rating} />
                    </div>
                </div>

                <div className='flex items-center'>
                    <input id='input-Bookfeatured' type='checkbox' name='featured' className='w-4 h-4' defaultChecked={editBookInfo?.featured} />
                    <label htmlFor='featured' className='ml-2 text-sm'> This is a featured book </label>
                </div>

                <button type='submit' className='submit' id='submit'>{editBookInfo?.name ? 'Update Book' : 'Add Book'}</button>
            </form>
        </div>
    );
};

export default BookForm;