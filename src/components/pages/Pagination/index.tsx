import { GrNext, GrPrevious } from 'react-icons/gr';
import Style from './style';

interface IProps {
    numberOfPages: number,
    activePageNumber: number,
    onPageChange: (pageNumber: number) => void
}

const Pagination = ({ numberOfPages, onPageChange, activePageNumber }: IProps) => {
    const handelNext = () => {
        if (numberOfPages > activePageNumber) {
            onPageChange(activePageNumber + 1);
        }
    }
    const handelPrev = () => {
        if (activePageNumber > 0) {
            onPageChange(activePageNumber - 1);
        }
    }
    return (
        <Style>
            <span className="prev" onClick={handelPrev}>
                <GrPrevious />
            </span>
            {Array(numberOfPages).fill("").map((el, index) => {
                return <span
                    key={index}
                    className={activePageNumber === index + 1 ? "active" : ""}
                    onClick={() => { onPageChange(index + 1) }}
                >{index + 1}</span>
            })}
            <span className="next" onClick={handelNext}>
                <GrNext />
            </span>
        </Style>
    )
}

export default Pagination