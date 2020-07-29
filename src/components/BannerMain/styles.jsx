import styled from "styled-components";

const BannerMainContainer = styled.section`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-size: cover;
  color: var(--white);
  height: 80vh;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
`;

const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 5%;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  margin-bottom: 50px;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px){
      display: none;
  };
`;

const WatchButton = styled.button`
    background-color: var(--black);
    border: 0;
    border-radius: 5px;
    color: var(--white);
    cursor: pointer;
    display: none;
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    outline: none;
    padding: 16px 24px;
    
    @media (max-width: 800px){
        display: block;
    }
`;

export { BannerMainContainer, ContentAreaContainer, WatchButton };
