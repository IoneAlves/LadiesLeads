import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../componentes/Home';
import Search from '../componentes/Search';

function Rotas () {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/search' element={<Search/>}/>
            </Routes>        
        </BrowserRouter>
    );
};

export default Rotas;
