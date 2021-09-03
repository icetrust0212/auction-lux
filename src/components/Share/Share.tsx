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
        <div className="social-wrapper weight-light">
            <h2 className="title color-secondary size-extremely-large w-100 text-center weight-thin">Share Where?</h2>
            <div className="social-list">
            {socialIcons.map((socialIcon, index) => {
                return (
                    React.createElement(socialIcon, {
                        className: " color-light social-icon",
                        key: index
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