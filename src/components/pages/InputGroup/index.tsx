import React from 'react';
import { H4, Body1 } from '@/components/pages/Typography'; 
import Input from '@/components/pages/Input'; 
import Style from './style';

interface IProps {
    label: string,
    type?: string,
    value: string,
    name?: string,
    error?: string,
    fullWidth?: boolean,
    margin?: string,
    className?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputGroup = ({ label, type, value, name, error, fullWidth, margin, className = "", onChange }: IProps) => {
    return (
        <Style className={className} margin={margin} fullWidth={fullWidth}>
            <H4
                weight={500}
                color='primary/200'
                margin='0 0 5px'
            >{label}</H4>
            <Input
                type={type || "text"}
                fullWidth={fullWidth}
                hasError={Boolean(error)}
                value={value}
                onChange={onChange}
                name={name}
                placeholder={label.toLowerCase()}
            />
            {error && <Body1
                color="danger"
                weight={500}
                margin='5px 5px 0'
                className='error'>{error}</Body1>}
        </Style>
    )
}

export default InputGroup;
