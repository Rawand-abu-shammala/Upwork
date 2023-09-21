import React, { ReactNode } from 'react';
import Style from './style'; 

interface IProps {
    children?: ReactNode
    className?: string
}

const Divider = ({ className = "", children }: IProps) => {
    return (
        <Style className={className}>
            {children ? <div className='with_text'>
                <div className="line_start" />
                <div className='content'>
                    {children}
                </div>
                <div className="line_end" />
            </div> : <div className='divider_line' />}
        </Style>
    )
}

export default Divider;
