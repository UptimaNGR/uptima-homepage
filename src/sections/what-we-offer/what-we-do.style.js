import styled from 'styled-components';

export const WhatWeOfferStyle = styled.div`
  margin-bottom: 100px;

  h3 {
    text-align: center;
    margin-bottom: 40px;
    font-family: 'Nunito', sans-serif;
    font-size: 25px;
  }

  .what-we-offer-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .what-we-offer-card {
      width: 100%;

      &:not(:first-child) {
        margin-left: 50px;
      }

      p {
        color: #959499;
        margin: 10px 0;
        line-height: 1.5rem;
      }
    }
  }

  .img-container {
    height: auto;
    width: 500px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;
