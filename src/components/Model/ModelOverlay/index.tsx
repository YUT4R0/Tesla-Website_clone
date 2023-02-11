import React from 'react';
import { Container } from './styles';
import useWrapperScroll from '../useWrapperScroll';

interface Props {
    children: React.ReactNode
}

const ModelOverlay: React.FC<Props> = ({ children }) => {

    const { scrollY, scrollY_progress } = useWrapperScroll()

    return (
        <Container>
            { children }
        </Container>
    );
}

export default ModelOverlay;