import styled from 'styled-components';

export const CardStyle = styled.div`
  border: 1px solid green;
  width: 30%;
  height: 180px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
  border-radius: 6px;
  overflow: hidden;

  .card-img {
    height: 100%;
    margin: 0;
    padding: 0;
    align-self: stretch;
    position: relative;
    left: -6px;
  }
`;

export const CardTextContainer = styled.div`
  padding: 0 20px;
  color: #959499;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 30px 10px;

  h3 {
    color: #000;
    font-weight: 600;
    font-size: 16px;
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }

  p {
    font-weight: 300;
    font-size: 15px;
  }
`;
