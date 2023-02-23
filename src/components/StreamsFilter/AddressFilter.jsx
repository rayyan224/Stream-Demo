import { Todo } from "@web3uikit/core";
import styled from "styled-components";

export const AddressFilter = ({ address = [], onAddressChange }) => {
  return (
    <TodoStyled
      buttonText="Add"
      label="Enter Address"
      onChange={onAddressChange}
      todos={address}
    />
  );
};

const TodoStyled = styled(Todo)`
  padding: 0px;
  section {
    padding: 0px;
  }

  > input {
    width: 100%;
  }

  [data-testid="test-input"] {
    width: 80% !important;
  }

  #todo-input {
    width: calc(100% - 20px);
  }

  display: flex;
`;
