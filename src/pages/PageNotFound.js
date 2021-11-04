import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    const style = {
        textAlign: "center",
        marginTop: "5vh"
    }
    return (
        <div style={ style }>
            <h1>Great Scott, Marty! We are Lost!</h1>
            <span>Hey, I don't know doc. Maybe we should just go <Link to="/"><u>Back to the HomePage!</u></Link></span>
        </div>
    );
};

export default PageNotFound;