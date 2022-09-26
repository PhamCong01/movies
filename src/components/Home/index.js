import React from 'react';
import ComingSoon from './ComingSoon';
import Footer from './Footer';
import Header from './Header';
import MoviesNew from './MoviesNew';
import MoviesWeek from './MoviesWeek';

function Home() {
    return <>
        <Header/>
        <MoviesNew/>
        <MoviesWeek/>
        <ComingSoon/>
        <Footer/>
    </>
}

export default Home;