import React from 'react';
import { Container, Header, Logo, MenuIcon, Footer, } from './styles';
import useWrapperScroll from '../Model/useWrapperScroll';
import { useTransform } from 'framer-motion';

const UniqueOverlay: React.FC = () => {

  const { scrollY_progress } = useWrapperScroll()

  const opacity = useTransform(
        scrollY_progress,
        [0.9, 1],
        [0, 1]
    )

  return (
    <Container>
        <Header>
            <Logo />
            <MenuIcon />
        </Header>

        <Footer style={{ opacity }}>
            <li><a target='_blank' href='#corporation'>UI clone</a></li>
            <li><a target='_blank' href='#politics'>UI clone</a></li>
            <li><a target='_blank' href='#recalls'>UI clone</a></li>
            <li><a target='_blank' href='#contact'>UI clone</a></li>
        </Footer>        
    </Container>
  );
}

export default UniqueOverlay;