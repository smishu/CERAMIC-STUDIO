import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import img from '../../Images/Group-573.png';

const SocailLogin = () => {

    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/product');
    }
    return (
        <div>
            <hr />
            {errorElement}
            <button onClick={() => { signInWithGoogle() }} className='btn btn-info w-50'>
                <img style={{ width: '30px' }} src={img} alt="" />
                <span className='px-2'>Google Sing In</span></button>

        </div>
    );
};

export default SocailLogin;