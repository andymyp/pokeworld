import React from "react";
import {
  Body,
  Button,
  Close,
  Footer,
  Header,
  Model,
  Wrapper,
} from "../styles/modal";

const Modal = ({
  showModal,
  setShowModal,
  title,
  body,
  hasClose,
  hasFooter,
  onConfirm,
}) => {
  if (showModal) {
    return (
      <Wrapper>
        <Model>
          <Header>
            <div className="title">{title}</div>
            {hasClose ? (
              <Close onClick={() => setShowModal(!showModal)}>
                <i className="fa fa-times"></i>
              </Close>
            ) : null}
          </Header>
          <Body>{body}</Body>
          {hasFooter ? (
            <Footer>
              <Button onClick={onConfirm}>Save</Button>
              <Button onClick={() => setShowModal(!showModal)}>Cancel</Button>
            </Footer>
          ) : null}
        </Model>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default Modal;
