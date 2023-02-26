import { toast } from 'react-toastify';
import { bookDeleted } from '../actionCreators';

// this thunk function is deleting a books from the server
const deleteBook = (bookId) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${bookId}`, {
            method: 'DELETE'
        });

        if (response.status === 200) {
            toast.success('Book deleted successfully!!');
        } else {
            toast.error('Something went wrong!!');
        }

        dispatch(bookDeleted(bookId));
    }
}

export default deleteBook;