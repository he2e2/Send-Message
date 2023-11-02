import React, { useState } from "react";
import { Full_Container, Msg_Container, Button, Text } from "../Components";
import axios from "axios";

export default function Message() {
  const [messageResult, setMessageResult] = useState("");

  // 메시지 보내기 버튼 클릭 시 "http://localhost:8000/message"에 요청을 보내 응답을 받아 옴.
  const handleSendMessage = async () => {
    try {
      const response = await axios.get("http://localhost:8000/message");
      setMessageResult(response.data);
    } catch (error) {
      console.error("서버 요청 실패:", error);
      setMessageResult("서버 요청 실패");
    }
  };

  return (
    <Full_Container>
      <Msg_Container>
        <Button onClick={handleSendMessage}>메시지 보내기</Button>
        <Text>{messageResult}</Text>
      </Msg_Container>
    </Full_Container>
  );
}
