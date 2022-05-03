import React from 'react';
import './contact.css';
import Contactpic from '../../Images/organic-flat-customer-support-illustration_23-2148899173.webp';

const Contact = () => {
    return (
        <div className='d-flex mx-auto contact'>
            <div className='text-center w-50 contact-p'>
                <h3>CERAMIC-STUDIO!!</h3>
                <p>
                    <br />
                    A:   500 Terry Francois St.
                    <br />
                    San Francisco, CA 94158
                    <br />
                    T:   123-456-7890
                    <br />
                    E:  info@my-domain.com
                </p>
                <br />
                <p>
                    MON - FRI:  7am - 10pm
                    <br />
                    SATURDAY:   8am - 10pm
                    <br />
                    SUNDAY:   8am - 11pm
                </p>
                <br />
                <p>
                    FAQ / Shipping & Returns /
                    <br />
                    Store Policy /
                    <br />
                    Payment Methods
                </p>

            </div>
            <div className='Contactpic mt-5'>
                <img src={Contactpic} alt="" />
            </div>

        </div>
    );
};

export default Contact;