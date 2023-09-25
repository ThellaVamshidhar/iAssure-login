import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Home(){
    const { logout } = useAuth0();
    return(
        <>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
<h1>Home</h1>
    </>
    )
}

export default Home;