import { toast } from 'react-toastify';
import { bookUpdated } from '../actionCreators';

// this thunk function is updating a book from the server
const updatedBook = (book) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${book.id}`, {
            method: 'PATCH',
            body: JSON.stringify(book),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

        if (response.status === 200) {
            toast.success('Book updated successfully!!');
        } else {
            toast.error('Something went wrong!!');
        }

        const editedBook = await response.json();

        dispatch(bookUpdated(editedBook.id, editedBook));
    }
}

export default updatedBook;