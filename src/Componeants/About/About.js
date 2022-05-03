import React from 'react';
import './About.css';
import Img from '../../Images/about.webp';

const About = () => {
    return (
        <div className='About'>
            <div className='para'>
                <h2>OUR STORY & PHILOSOPHY</h2>
                <p>A ceramic is a material that is neither metallic nor organic. It may be crystalline, glassy or both crystalline and glassy. Ceramics are typically hard and chemically non-reactive and can be formed or densified with heat
                    A ceramic is any of the various hard, brittle, heat-resistant and corrosion-resistant materials made by shaping and then firing an inorganic, nonmetallic material, such as clay, at a high temperature. [1][2] Common examples are earthenware, porcelain, and brick.
                </p>
                <br />
                <p>The earliest ceramics made by humans were pottery objects (pots or vessels) or figurines made from clay, either by itself or mixed with other materials like silica, hardened and sintered in fire. Later, ceramics were glazed and fired to create smooth, colored surfaces, decreasing porosity through the use of glassy, amorphous ceramic coatings on top of the crystalline ceramic substrates.[3] Ceramics now include domestic, industrial and building products, as well as a wide range of materials developed for use in advanced ceramic engineering, such as in semiconductors.</p>
            </div>
            <div className='Img'>
                <img src={Img} alt="" />
            </div>

        </div>
    );
};

export default About;