import './share.css';
import React, { useState } from 'react';

import { Facebook, Google, Twitter } from 'react-bootstrap-icons';
const socialIcons = [
    Facebook, Google, Twitter,Facebook, Google, Twitter,Facebook, Google, Twitter,
    Facebook, Google, Twitter,Facebook, Google, Twitter,Facebook, Google, Twitter,
    Facebook, Google, Twitter,Facebook, Google, Twitter,Facebook, Google, Twitter,
    Facebook, Google, Twitter,Facebook, Google, Twitter,Facebook, Google, Twitter,
    Facebook, Google, Twitter,Facebook, Google, Twitter,Facebook, Google, Twitter,
    Facebook, Google, Twitter,Facebook, Google, Twitter,Facebook, Google, Twitter,
    Facebook, Google, Twitter,Facebook, Google, Twitter,Facebook, Google, Twitter,
    Facebook, Google, Twitter,Facebook, Google, Twitter,Facebook, Google, Twitter,
]
const Share = (props: PropsType) => {
    const [activeComment, setActiveComment] = useState(1);
    return (
        <div className="social-wrapper">
            <h2 className="title color-secondary size-extremely-large w-100 text-center mb-5">Share Where?</h2>
            <div className="social-list">
            {socialIcons.map(socialIcon => {
                return (
                    React.createElement(socialIcon, {
                        className: " color-light social-icon"
                    })
                )
            })}
            </div>
                
        </div>

    )
}

interface PropsType {

}

export default Share;