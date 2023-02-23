import { Typography, Checkbox, Illustration } from "@web3uikit/core";
import styled from "styled-components";

export const Options = ({
  isNftTransfersSelected,
  isTokenTransfersSelected,
  isNativeTransactionSelected,
  onNftTransferSelectChange,
  onTokenTransferSelectChange,
  onNativeTransactionsSelectChange,
}) => {
  return (
    <DivStyled>
      <Typography variant="subtitle1" weight={"550"}>
        Options
      </Typography>
      <DivOptionsStyled>
        <Checkbox
          align="center"
          id="nft-transfers"
          label={
            <DivOptionStyled>
              <Illustration height={48} logo="pack" width={34} />
              <Typography variant="body16" weight="550">
                NFT Transfers
              </Typography>
            </DivOptionStyled>
          }
          name="Test checkbox input"
          checked={isNftTransfersSelected}
          onChange={onNftTransferSelectChange}
        />
        <Checkbox
          align="center"
          id="token-transfers"
          label={
            <DivOptionStyled>
              <Illustration height={48} logo="chest" width={34} />
              <Typography variant="body16" weight="550">
                Token Transfers
              </Typography>
            </DivOptionStyled>
          }
          name="Test checkbox input"
          checked={isTokenTransfersSelected}
          onChange={onTokenTransferSelectChange}
        />
        {/* <Checkbox
          align="center"
          id="token-transfers"
          label={
            <DivOptionStyled>
              <Illustration height={48} logo="chest" width={34} />
              <Typography variant="body16" weight="550">
                Native Transfers
              </Typography>
            </DivOptionStyled>
          }
          name="Test checkbox input"
          checked={isNativeTransactionSelected}
          onChange={onNativeTransactionsSelectChange}
        /> */}
      </DivOptionsStyled>
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const DivOptionsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const DivOptionStyled = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
