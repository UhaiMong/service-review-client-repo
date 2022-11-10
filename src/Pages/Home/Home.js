import React from 'react';
import Audience from '../Audience/Audience';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <SpecialOffer></SpecialOffer>
            <Audience></Audience>
        </>

    );
};

export default Home;