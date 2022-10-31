import './Logo.css'

import React, { useEffect, useState } from 'react';

import logo1 from './1.svg';
import logo2 from './2.svg';
import logo3 from './3.svg';

const Logo = () => {
    const [logo, setLogo] = useState(logo1);
    const logos = [logo1, logo2, logo3];

    useEffect(() => {
        const timer = setInterval(() => {
            const min = 0;
            const max = 3;
            const rand = Math.trunc(min + Math.random() * (max - min));
            console.log(rand);
            setLogo(logos[rand]);
        }, 2000);
    }, []);

    return (<img src={logo} className="App-logo" alt="logo" />)
}

export default Logo;