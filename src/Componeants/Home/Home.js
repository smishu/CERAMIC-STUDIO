import React from 'react';
import AboutCeramic from '../AboutCeramic/AboutCeramic';
import Bannar from '../Bannar/Bannar';
import CeramicPart from '../CeramicPart/CeramicPart';
import Product from '../Product/Product';


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Product></Product>
            <AboutCeramic></AboutCeramic>
            <CeramicPart></CeramicPart>

        </div>
    );
};

export default Home;