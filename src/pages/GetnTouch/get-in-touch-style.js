import styled from 'styled-components';

export const GetInTouchStyle = styled.div`
  margin: 0 auto;

  .banner-content {
    margin: 0 auto;
    color: #fff;
    height: 80vh;

    img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -10;
    }

    .banner-text {
      position: relative;
      top: 150px;
      width: 60%;
      line-height: 1.6rem;

      h4 {
        font-size: 40px;
        margin: 0;
        color: #fff;
      }

      p {
        font-size: 17px;
      }
    }
  }

  .step-form {
    display: flex;
    justify-content: space-between;

    .form-container {
      border-radius: 5px;
      align-self: flex-start;
      position: relative;
      top: -220px;
      box-shadow: 8px 8px 40px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      overflow: hidden;

      .form-header {
        background: #f3f4f6;
        padding: 10px 20px;
        color: #050384;
        display: flex;
        justify-content: space-between;
        algn-items: center;

        .square {
          background: #050384;
          width: 120px;
          margin-right: 50px;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;

          .icon {
            width: 40px;
            height: 40px;
          }
        }
      }

      .form-content {
        padding: 20px;
        background: #fff;

        .message-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 20px;
          font-size: 14px;
          background: #2e9a59;
          border-radius: 5px;
          margin-bottom: 20px;
          font-weight: 400;

          .success-message {
            color: #fff;
          }

          .close {
            color: red;
            font-size: 20px;
            cursor: pointer;
          }
        }

        .form-control {
          display: flex;

          .input-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;

            &:not(:first-child) {
              margin-left: 30px;
            }
          }

          input,
          textarea {
            border-radius: 20px;
            outline: 0;
            border: 0;
            background: #f3f4f6;
            padding: 13px 20px;
            font-size: 13px;
          }
        }

        button {
          background: #050384;
          border-radius: 20px;
          outline: 0;
          border: 0;
          color: #fff;
          width: 100%;
          padding: 12px 20px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Nunito', sans-serif;
        }
      }
    }
  }

  .next-step {
    /* position: relative; */
    h4 {
      font-size: 22px;
    }

    .steps {
      position: relative;
      margin-right: 200px;

      .step {
        p {
          margin-left: 30px;
          color: rgba(5, 3, 132, 0.7);
          font-size: 14px;
        }

        &:after {
          position: absolute;
          top: 0px;
          left: 0px;
          height: 80%;
          content: '';
          border: 1px solid black;
        }

        h6 {
          position: relative;
          font-size: 15px;
          margin-left: 30px;
          margin-bottom: 0;

          &:after {
            position: absolute;
            top: 0;
            left: -10px;
            height: 18px;
            width: 18px;
            content: '';
            background: red;
            border-radius: 50%;
            z-index: 1;
            margin-right: 30px;
            margin-left: -30px;
          }

          &:before {
            position: absolute;
            top: 4px;
            left: -5.4px;
            height: 5px;
            width: 5px;
            content: '';
            border-radius: 50%;
            z-index: 2;
            border: 2px solid #fff;
            margin-left: -30px;
          }
        }
      }
    }
  }
`;
