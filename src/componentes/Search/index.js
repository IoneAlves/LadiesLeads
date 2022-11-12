import React from 'react'
import './style.css';
import {HeaderSearch} from '../Header';
import MainSerch from '../MainSearch';
import Footer from '../Footer';

function Search () {
    return (
        <div className='search'>
            <HeaderSearch/>
            <MainSerch/>
            <Footer/>           
        </div>
    );
};

export default Search;