import React, { useState } from 'react';
import './Bannar.css';
import sider2 from '../../Images/young-pretty-girl-is-makjpg.jpg';
import { Button } from 'react-bootstrap';


const Bannar = () => {

    return (
        <div className='d-flex mx-auto bannar'>
            <div className='para-div'>
                <h3> <span>C</span> ERAMIC STUDIO</h3>
                <p>
                    A beautiful handmade plate can make even the most simple food look amazing. Start your collection by mixing and matching unique dinner plates and platters from different artists. An elegant way to make your set match is by choosing one color-direction for your dinnerware. Then the final look will feel complete, yet still personal and unique</p>

                <Button className='mt-2' variant="outline-success">More</Button>{' '}

            </div>
            <div>
                <img src={sider2} alt="" />
            </div>

        </div>
    );
};

export default Bannar;