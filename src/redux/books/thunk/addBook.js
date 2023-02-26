import { toast } from 'react-toastify';
import { bookAdded } from '../actionCreators';

// this thunk function is adding a new books from the server
const addBook = (book) => {
    return async (dispatch) => {
        const response = await fetch('http://localhost:9000/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

        if (response.status === 201) {
            toast.success('Book added successfully!!');
        } else {
            toast.error('Something went wrong!!');
        }

        const newBook = await response.json();

        dispatch(bookAdded(newBook));
    }
}

export default addBook;