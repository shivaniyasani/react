import React, { useState } from "react";
function RenderComponent(){
    const [isLoggedIn, setIsLoggedIN] = useState(false);
    const handleLoginToggle = () => {
        setIsLoggedIN(!isLoggedIn);
    };

    return (
        <div>
            <h1>Example of conditional renering</h1>
            {isLoggedIn ? (
                <p>Welocome User! You are logged in</p>

            ) :(
                <p>Login to access your user account</p>
            )}
            <button onClick={handleLoginToggle}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
            
        </div>
    )
}
export default RenderComponent;