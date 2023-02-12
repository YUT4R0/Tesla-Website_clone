import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Container } from './styles';
import useWrapperScroll from '../useWrapperScroll';
import { CarModel } from '../ModelsContext';
import { useTransform } from 'framer-motion';

interface Props {
    children: React.ReactNode
    model: CarModel
}

type SectionDimentions = Pick<HTMLElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({ children, model }) => {

    const getSectionDimensions = useCallback(() => {
        return {
            offsetTop: model.sectionRef.current?.offsetTop,
            offsetHeight: model.sectionRef.current?.offsetHeight
        } as SectionDimentions
    }, [model.sectionRef])

    const [dimensions, setDimentions] = useState<SectionDimentions>(
        getSectionDimensions()
    )
    
    useLayoutEffect(() => {
        const onResize = () => {
            window.requestAnimationFrame(() => setDimentions( getSectionDimensions() ))
        }

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)

    }, [getSectionDimensions])

    const { scrollY } = useWrapperScroll()

    const sectionScroll_progress = useTransform(scrollY, Y => (
        (Y - dimensions.offsetTop) / dimensions.offsetHeight
    ))

    const opacity = useTransform(
            sectionScroll_progress,
            [
                -0.5, -0.05,
                0.05, 0.5,
            ],
            [
                0, 1,
                1, 0
            ]
        )

    const pointerEvents = useTransform(opacity, value => 
        value > 0
        ? 'auto'
        : 'none'
    )

    return (
        <Container style={ { opacity, pointerEvents } }>
            { children }
        </Container>
    );
}

export default ModelOverlay;