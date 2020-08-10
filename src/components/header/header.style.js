import styled from 'styled-components';

export const HeaderStyle = styled.div`
  height: 5rem;
  background: ${(props) => (props.backgroundImg ? "url('assets/img/banner2.png')" : '#edf6ff')};
  /* position: fixed; */
  top: 0;
  left: 0;
  z-index: 10;
  transition: top 0.8s;

  .logo {
    width: 100px;
    cursor: pointer;
    /* height: 50px; */
  }

  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-item {
      text-decoration: none;
      list-style: none;
      margin-left: 40px;

      &:last-child {
        border: 2px solid ${(props) => (props.backgroundImg ? '#fff' : ' #050484')};
        padding: 13px 30px;
        border-radius: 30px;
        font-weight: bold;
      }

      .nav-link {
        color: ${(props) => (props.backgroundImg ? '#fff' : ' #050484')};
        text-decoration: none;
        cursor: pointer;

        &:last-child {
          font-family: 'Nunito', sans-serif;
        }
      }
    }
  }
`;

export const HeaderStyleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
