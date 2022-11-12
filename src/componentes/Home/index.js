import React from 'react';
import './style.css'
import HeaderHome from '../Header';
import Main from '../Main';
import Footer from '../Footer';


function Home () {
    return (
        <section>
            <HeaderHome/>
            <Main/>
            <Footer/>
        </section>
    );
};

export default Home;