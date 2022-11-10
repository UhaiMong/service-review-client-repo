import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import useTitle from '../Hook/useTitle';

const SocialLogin = () => {
    useTitle('Social Login')
    const location = useLocation();
    const { signInWithGoogle } = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const loginWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);

                const recentUser = {
                    email: user.email
                }
                // jwt token
                fetch('https://service-review-server-psi.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(recentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('review-token', data.token);
                        navigate(from, { replace: true });
                        // form.reset();
                    })
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='mx-auto w-2/6'>
            <button
                onClick={loginWithGoogle}
                type="submit"
                className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
                Continue with google
            </button>
        </div>
    );
};

export default SocialLogin;