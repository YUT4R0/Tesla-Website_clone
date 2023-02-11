import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Heading = styled.div`
  margin-top: 12vh;

  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #393c41; 
  }

  > h2 {
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.25rem;
    color: #5c5e62;
  }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    margin-bottom: 10vh;

    > button {
        background: #1a1720;
        color: white;
        opacity: .5;

        width: 100%;

        font-size: .75rem;
        font-weight: 500;
        letter-spacing: .125rem;
        text-transform: uppercase;

        padding: .75rem;

        width: 15rem;
        
        white-space: nowrap;

        border-radius: .25rem;
        border: none;
        outline: 0;
        
        cursor: pointer;

        &.white {
            background: white;
            color: #1a1720;
            opacity: 1;
        }
    }

    @media (min-width: 38rem) {
        flex-direction: row;
        margin-bottom: 12vh;

        
    }
`

