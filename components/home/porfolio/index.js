import React, { useState } from 'react'
import styles from './porfolio.module.scss';
const CardImage = '/assets/images/card.png';
import Portfolio from '../portfolio/index';

export default function Porfolio() {
    const [counter, setCounter] = useState(1);
    return (
        <div>
            <Portfolio/>
        </div>
    )
}
