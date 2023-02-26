import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import Navbar from './components/Navbar/Navbar';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Navbar />
      <main className='py-12 2xl:px-6'>
        <div className='container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8'>
          <BookList />
          <div>
            <BookForm />
          </div>
        </div>
      </main>
      <ToastContainer position='top-center' theme='colored' />
    </>
  );
}

export default App;
