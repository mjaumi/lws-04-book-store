import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookDetails } from '../../redux/books/actionCreators';
import addBook from '../../redux/books/thunk/addBook';
import updatedBook from '../../redux/books/thunk/updateBook';

const BookForm = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();
    const editBookInfo = useSelector(state => state.books.editBook);

    // integration of react hooks here
    const [bookFormData, setBookFromData] = useState({
        name: '',
        author: '',
        thumbnail: '',
        price: '',
        rating: '',
        featured: false,
    });

    // updating the book form data when the edit book info is dispatched
    useEffect(() => {
        setBookFromData({
            name: editBookInfo.id ? editBookInfo.name : '',
            author: editBookInfo.id ? editBookInfo.author : '',
            thumbnail: editBookInfo.id ? editBookInfo.thumbnail : '',
            price: editBookInfo.id ? editBookInfo.price : '',
            rating: editBookInfo.id ? editBookInfo.rating : '',
            featured: editBookInfo.id ? editBookInfo.featured : false,
            id: editBookInfo.id ? editBookInfo.id : '',
        });
    }, [editBookInfo]);

    // handler function to handle submitting book form
    const submitBookFormHandler = e => {
        e.preventDefault();

        if (editBookInfo?.id) {
            dispatch(updatedBook(bookFormData));
        } else {
            dispatch(addBook(bookFormData));
        }

        dispatch(getBookDetails(0));
        e.target.reset();
    }

    // handler function to handle form input change
    const formInputChangeHandler = e => {
        switch (e.target.name) {
            case 'name':
                return setBookFromData({
                    ...bookFormData,
                    name: e.target.value,
                });

            case 'author':
                return setBookFromData({
                    ...bookFormData,
                    author: e.target.value,
                });

            case 'thumbnail':
                return setBookFromData({
                    ...bookFormData,
                    thumbnail: e.target.value,
                });

            case 'price':
                return setBookFromData({
                    ...bookFormData,
                    price: parseInt(e.target.value),
                });

            case 'rating':
                return setBookFromData({
                    ...bookFormData,
                    rating: parseInt(e.target.value),
                });

            case 'featured':
                return setBookFromData({
                    ...bookFormData,
                    featured: e.target.checked,
                });

            default:
                return;
        }
    }

    // rendering book form component here
    return (
        <div className='p-4 overflow-hidden bg-white shadow-cardShadow rounded-md'>
            <h4 className='mb-8 text-xl font-bold text-center'>Add New Book</h4>
            <form onSubmit={submitBookFormHandler} className='book-form'>
                <div className='space-y-2'>
                    <label htmlFor='name'>Book Name</label>
                    <input required className='text-input' type='text' id='input-Bookname' name='name' value={bookFormData.name} onChange={formInputChangeHandler} />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='category'>Author</label>
                    <input required className='text-input' type='text' id='input-Bookauthor' name='author' value={bookFormData.author} onChange={formInputChangeHandler} />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='image'>Image Url</label>
                    <input required className='text-input' type='text' id='input-Bookthumbnail' name='thumbnail' value={bookFormData.thumbnail} onChange={formInputChangeHandler} />
                </div>

                <div className='grid grid-cols-2 gap-8 pb-4'>
                    <div className='space-y-2'>
                        <label htmlFor='price'>Price</label>
                        <input required className='text-input' type='number' id='input-Bookprice' name='price' value={bookFormData.price} onChange={formInputChangeHandler} />
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor='quantity'>Rating</label>
                        <input required className='text-input' type='number' id='input-Bookrating' name='rating' min='1' max='5' value={bookFormData.rating} onChange={formInputChangeHandler} />
                    </div>
                </div>

                <div className='flex items-center'>
                    <input id='input-Bookfeatured' type='checkbox' name='featured' className='w-4 h-4' checked={bookFormData.featured} onChange={formInputChangeHandler} />
                    <label htmlFor='featured' className='ml-2 text-sm'> This is a featured book </label>
                </div>

                <button type='submit' className='submit' id='submit'>{editBookInfo?.name ? 'Update Book' : 'Add Book'}</button>
            </form>
        </div>
    );
};

export default BookForm;