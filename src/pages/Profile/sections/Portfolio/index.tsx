import React from 'react'
import { Button, H3, H4 } from 'components'
import Style from './style'
import IUser from 'types/user'
import PortfolioItem from './PortfolioItem'

interface IProps {
    user: IUser,
    addToPortfolio: () => void
}

const Portfolio = ({ user, addToPortfolio }: IProps) => {
    return (
        <Style>
            <div className="head">
                <H4>Portfolio ({user.portfolio.length})</H4>
                <Button
                    onClick={addToPortfolio}
                    variant='outlined'
                    shape='circled'
                    className='add_btn'>+</Button>
            </div>

            {user.portfolio.length === 0 ? <H3 weight={600} color="primary/200">Add items to your portfolio</H3> : <div className="items">
                {user.portfolio.map(el => <PortfolioItem
                    key={el.description}
                    image={el.image}
                    desc={el.description}
                />)}
            </div>}
        </Style>
    )
}

export default Portfolio 