import PlusImg from './assets/images/icon-plus.svg'
import MinusImg from './assets/images/icon-minus.svg'

import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Question = ({ title, desc }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(open => !open)
    }

    const Image = open ? PlusImg : MinusImg;

    return (
        <details>
            <summary>
            {title}
            <img src={Image} alt="" onClick={handleClick} />
            </summary>
            <p >
                {desc}
            </p>
        </details>
    );
}

export default Question;