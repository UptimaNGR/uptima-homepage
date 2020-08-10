import styled from 'styled-components';
import { Link } from 'react-scroll';

export const BannerStyle = styled.div`
  /* height: 80%; */
  /* background: #edf6ff; */
  /* height: 70vh; */
  position: relative;
  z-index: 5;
  overflow-x: hidden;
  margin-bottom: 60px;

  .banner-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 80vh;
  }
`;

export const BannerStyleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const BannerHeading = styled.h3`
  font-size: 32px;
  font-family: 'Nunito', sans-serif;
  margin: 0;
`;

export const BannerBriefText = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5rem;
  font-family: 'Rubik', sans-serif;
  letter-spacing: 0.3px;
`;

export const BannerButton = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  padding: 18px 40px;
  color: #fff;
  border: none;
  outline: none;
  background: #050484;
  border-radius: 30px;
  cursor: pointer;
  align-self: flex-start;
  font-family: 'Nunito', sans-serif;
`;

export const BannerImgContainer = styled.div`
  height: 400px;
  position: relative;
  /* left: 50px; */
  top: 30px;
`;

export const BannerImg = styled.img`
  height: auto;
  width: 100%;
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BannerContainer = styled.div``;
