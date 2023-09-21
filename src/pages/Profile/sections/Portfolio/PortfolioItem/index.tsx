import { Body1 } from '@/components'
import Style from './style'

interface IProps {
    image: string,
    desc: string
}

const PortfolioItem = ({ image, desc }: IProps) => {
    return (
        <Style>
            <img src={image} alt={desc} />
            <Body1>{desc}</Body1>
        </Style>
    )
}

export default PortfolioItem