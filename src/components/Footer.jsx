import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
        <p>This is demo website with ReactJS.</p>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  padding: 10px 0;
  text-align: center;
  color: white;
  background: ${(props) => props.theme.colors.primary};
`;

export default Footer