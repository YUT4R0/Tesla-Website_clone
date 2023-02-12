import styled from 'styled-components';
import { BurgerSVG, LogoSVG } from '../assets'
import { motion } from 'framer-motion';

export const Container = styled.div`
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1.25rem;
    min-height: 3.25rem;
`

export const Logo = styled(LogoSVG)`
    height: 1rem;
    cursor: pointer;
`

export const MenuIcon = styled(BurgerSVG)`
    height: 1rem;
    cursor: pointer;
`

export const Footer = styled(motion.footer)`
    position: fixed;

    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: .625rem;

    margin-bottom: 2.5vh;

    > li {
        list-style: none;
        font-size: .875rem;

        > a {
            text-decoration: none;
            color: gray;
            cursor: pointer;

            transition: all 0.1s ease-in-out;

            &:hover {
                color: #555;
            }
        }
    }

    @media (min-width: 38rem) {
        flex-direction: row;
        margin-bottom: 5vh;
    }
`

