import styled from 'styled-components';

const VideoCardGroupContainer = styled.section`
    color: var(--white);
    min-height: 197px;
    margin: 0 5% 1em;
    margin-bottom: 16px;
`;

const Title = styled.h2`
    border-radius: 5px;
    display: inline-block;
    font-weight: 35px;
    font-size: 20px;
    line-height: 1;
    margin-bottom: 16px;
    padding: 20px;

    @media (max-width: 800px){
        font-size: 18px;
        padding: 10px;
    }

`;

const ExtraLink = styled.a`
    margin-left: 16px;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus{
        opacity: .5;
    }

    @media (max-width: 800px){
        display: block;
        margin-bottom: 16px;
        margin-left: 0;
    }
`;

const VideoCardList = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
    overflow-x: auto;

    li{
        margin-right: 16px;
    }
`;


export {Title, ExtraLink, VideoCardList, VideoCardGroupContainer}