import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import "./Homestyle.css";

const clientId = "1095091147869-5regbtd2ok8dla6ciru14cd2gr412v85.apps.googleusercontent.com";

function Home(){
    const { logout } = useAuth0();
    const navigate = useNavigate();
    const onSuccess = () => {
        navigate('/')
    }
    return(
        <>
        <div className='body'>
        <nav>
            <h1>Logo</h1>
            <ul>
                <li><a href='#' className='links'>Home</a></li>
                <li><a href='#' className='links'>About </a></li>
                <li><a href='#' className='links'>Contact</a></li>
                <li><a href='#' className='links'>Login</a></li>
            </ul>
        </nav>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
        <div id='sigInButton'>
            <GoogleLogout
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </div></div>
    </>
    )
}

export default Home;