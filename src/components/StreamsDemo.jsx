import { useEffect, useState } from "react";
import styled from "styled-components";
import { StreamsFilter } from "./StreamsFilter/StreamsFilter";
import { io } from "socket.io-client";
import ReactJson from "react-json-view";
import lodash from "lodash";
import { useNotification } from "@web3uikit/core";
const url = "http://83.61.62.249:5080";

export const SteamsDemo = () => {
  const createStream = async (body) => {
    let res = await fetch("http://83.61.62.249:5080/streams/crosschain", {
      method: "PUT",
      headers: {
        accept: "application/json",
        "x-api-key": "123456",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    res = res.json();
    return res;
  };

  const addAddress = async ({ id, address }) => {
    return fetch(`http://83.61.62.249:5080/streams/crosschain/${id}/address`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "x-api-key": "123456",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    });
  };
  const [data, setData] = useState([]);
  const dispatch = useNotification();

  useEffect(() => {
    const socket = io(url);
    socket.on("demo_stream", (e) => {
      setData((d) => lodash.uniqBy([e, ...d], (data) => data.block.hash));
    });
  }, []);

  const handleStreamsSetup = async ({ address, ...body }) => {
    try {
      const res = await createStream(body);
      await addAddress({ id: res.id, address });
      dispatch({
        type: "success",
        message: "Success",
        title: "Stream created",
      });
    } catch (e) {
      throw e;
    }
  };
  return (
    <DivStyled>
      <StreamsFilter onStreamsCreateClick={handleStreamsSetup} />
      <ReactJson
        src={data}
        collapsed={2}
        indentWidth={4}
        collapseStringsAfterLength={42}
        displayDataTypes={false}
        enableClipboard={false}
        theme="flat"
        style={{
          padding: "32px",
          backgroundColor: "black",
          borderRadius: "20px",
        }}
      />
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 62px;
  gap: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
