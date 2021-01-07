import React from 'react';
import '../styles/loader.css';
import Assets from '../assets';

export default function Loader() {
    return (
        <div className="container">
            <img alt="logo" src={Assets.logo} />
        </div>
    );
}
