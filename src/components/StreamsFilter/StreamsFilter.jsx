import { Typography, Button, Checkbox } from "@web3uikit/core";
import styled from "styled-components";
import { Options } from "./Options";
import { AddressFilter } from "./AddressFilter";
import React, { useState } from "react";

export function StreamsFilter({ onStreamsCreateClick }) {
  const [filterState, setFilterState] = useState({
    address: [],
    includeNftTransfers: false,
    includeTokenTransfers: false,
    // nativeTransactions: false,
    allAddresses: false,
    confirmOnly: true,
  });

  const setFilterStateKey = (key, value) => {
    setFilterState((s) => ({
      ...s,
      [key]: value,
    }));
  };

  return (
    <DivStyled>
      <DivTitleStyled>
        <Typography variant="h1"> Streams Filter</Typography>
        <Checkbox
          label="Listen All Addresses"
          layout="switch"
          checked={filterState.allAddresses}
          onChange={(e) => setFilterStateKey("allAddresses", e.target.checked)}
          id="allAddresses"
        />
      </DivTitleStyled>
      {!filterState.allAddresses && (
        <AddressFilter
          address={filterState.address}
          onAddressChange={(e) => {
            setFilterStateKey("address", e);
          }}
        />
      )}

      <Options
        isNftTransfersSelected={filterState.includeNftTransfers}
        isTokenTransfersSelected={filterState.includeTokenTransfers}
        nativeTransactions={filterState.nativeTransactions}
        onNftTransferSelectChange={(e) =>
          setFilterStateKey("includeNftTransfers", e.target.checked)
        }
        onTokenTransferSelectChange={(e) =>
          setFilterStateKey("includeTokenTransfers", e.target.checked)
        }
        onNativeTransactionsSelectChange={(e) => {
          setFilterStateKey("nativeTransactions", e.target.checked);
        }}
      />
      <Button
        theme="primary"
        text="Start"
        size="large"
        type="button"
        onClick={() => onStreamsCreateClick(filterState)}
      />
    </DivStyled>
  );
}

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
`;

const DivTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    padding: 10px;
  }
`;
