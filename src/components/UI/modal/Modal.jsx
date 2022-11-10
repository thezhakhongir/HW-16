import React, { Component } from "react";
import styled from "styled-components";

const ModalStyle = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: fixed;
  }
  & .modal_card {
    width: 600px;
    height: 300px;
    background: white;
    position: fixed;
    top: 20%;
    border-radius: 5px;
    display: grid;
    border: 1px solid
      ${({ isValid }) => (isValid === "error" ? "red" : "greenyellow")};
    animation: MODAL 0.7s ease-in-out 1;
  }
  & .modal_head {
    height: 70%;
    background: ${({ isValid }) =>
      isValid === "error" ? "red" : "greenyellow"};
    border-radius: inherit;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  & .btns {
    display: flex;
    align-self: flex-end;
    justify-self: flex-end;
    gap: 10px;
    padding: 10px;
  }
  & .btns button {
    width: 100px;
    height: 30px;
    border: 0.1px solid #ccc;
    border-radius: 3px;
    background: #f6f6f6;
    transition: box-shadow 0.3s;
  }
  & .btns button:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  & .btns button:active {
    box-shadow: none;
  }
  & .error_message {
    height: 150%;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.124) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.094) 0px 1px 3px -1px;
    padding: 10px;
  }
  @keyframes MODAL {
    0% {
      transform: translateY(-500px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const BackdropStyle = styled.div`
  & {
    width: 100%;
    height: 100vh;
    background: #00000084;
    position: fixed;
    top: 0;
  }
`;

class Backdrop extends Component {
  render() {
    return <BackdropStyle></BackdropStyle>;
  }
}

export default class Modal extends Component {
  render() {
    const { title, message, toggle, type } = this.props;
    return (
      <>
        <Backdrop />
        <ModalStyle isValid={type}>
          <div className="modal_card">
            <div className="modal_head">
              <h1>{title}</h1>
            </div>
            <div className="error_message">{message}</div>
            <div className="btns">
              <button onClick={() => toggle()}>Try again</button>
            </div>
          </div>
        </ModalStyle>
      </>
    );
  }
}
