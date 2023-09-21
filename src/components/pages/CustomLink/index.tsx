import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const LinkSpan = styled.span`
  display: contents;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  
  a {
    display: contents;
    text-decoration: none;
    color: inherit;
  }
`;

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  to: string, 
  children: ReactNode
}

const CustomLink = ({ to, children, ...rest }: IProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    <LinkSpan {...rest} onClick={handleClick}>
      {children}
    </LinkSpan>
  );
};

export default CustomLink;
