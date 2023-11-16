import './Box.css'
import { useState } from 'react'
import Random from './Random';
export default function Box({ colors }) {

    const p = Random(colors.length);
    const [index, next] = useState(p);
    const change = () => {
        next(Random(colors.length));
    }
    return (
        <>

            <div className='box' style={{ backgroundColor: colors[index] }} onClick={change}>
            </div>
        </>
    )
}