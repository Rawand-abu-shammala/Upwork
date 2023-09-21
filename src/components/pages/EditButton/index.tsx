import Button from '@/components/pages/Button'
import { MdEdit } from '@/react-icons/md'
import Style from './style'
interface IProps {
    onClick: () => void,
    className?: string
}

const EditButton = ({ className = "", onClick }: IProps) => {
    return (
        <Style className={className}>
            <Button variant='outlined' shape='circled' onClick={onClick}>
                <MdEdit className='edit_icon'/>
            </Button>
        </Style>
    )
}

export default EditButton