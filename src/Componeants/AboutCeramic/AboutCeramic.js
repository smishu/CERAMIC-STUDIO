import React from 'react';
import './AboutCeramic.css';

const AboutCeramic = () => {
    return (
        <div>
            <div className='About-ceramic-img'>
                <img src="https://img.freepik.com/free-vector/pottery-hand-made-hobby-workshop-craft-steps-illustration-graphic-design-concept_385073-439.jpg?w=1380" alt="" />
            </div>
            <div className='About-ceramic-para'>
                <h2>Materials Science and Engineering: Ceramics</h2>
                <p> <span>A ceramic is a material that is neither metallic nor organic. It may be crystalline, glassy or both crystalline and glassy. Ceramics are typically hard and chemically non-reactive and can be formed or densified with heat.</span>
                    Ceramics are more than pottery and dishes: clay, bricks, tiles, glass, and cement are probably the best-known examples. Ceramic materials are used in electronics because, depending on their composition, they may be semiconducting, superconducting, ferroelectric, or an insulator. Ceramics are also used to make objects as diverse as spark plugs, fiber optics, artificial joints, space shuttle tiles, cooktops, race car brakes, micropositioners, chemical sensors, self lubricating bearings, body armor, and skis.</p>
            </div>

        </div>
    );
};

export default AboutCeramic;