import React from 'react';
import { logo } from '../assets';

const Logo = ({ width }) => {
    return (
        <img src={logo} style={{width}} alt="" />
    );
}

export default Logo;
