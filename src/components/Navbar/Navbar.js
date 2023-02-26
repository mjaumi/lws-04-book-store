import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../assets/images/logo.svg';
import { searchedByName } from '../../redux/filters/actionCreators';

const Navbar = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();

    // handler function to handle search by name feature
    const searchTextHandler = e => {
        dispatch(searchedByName(e.target.value));
    }

    // rendering the navbar component here
    return (
        <nav className='py-4 2xl:px-6'>
            <div className='container flex items-center justify-between'>
                <img src={logo} width='150px' className='object-contain' alt='logo' />

                <ul className='hidden md:flex items-center space-x-6'>
                    <li className='font-semibold cursor-pointer'>Book Store</li>
                    <li className='cursor-pointer'>Wishlist</li>
                    <li className='cursor-pointer'>My Collection</li>
                </ul>

                <form className='flex items-center'>
                    <div className='group relative rounded-md bg-white'>
                        <svg width='20' height='20' fill='currentColor'
                            className='absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary'>
                            <path fillRule='evenodd' clipRule='evenodd'
                                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'>
                            </path>
                        </svg>
                        <input onChange={searchTextHandler} type='text' placeholder='Filter books...' className='search' id='lws-searchBook' />
                    </div>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;