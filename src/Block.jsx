import Box from './Box'
import './Block.css'
export default function Block({ colors }) {
    const box = [[]];
    for (let i = 0; i < 25; i++) {
        box.push(<Box colors={colors} />);
    }
    return (
        <>
            <div className='group'>{box}</div>
        </>
    )
}