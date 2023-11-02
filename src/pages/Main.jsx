import React from "react";
import { Full_Container, Msg_Container, StyledLink } from "../Components";

export default function Main() {
  return (
    <Full_Container>
      <Msg_Container>
        {/* 로그인 버튼 클릭 시 "localhost:8000/" 경로로 이동 */}
        <StyledLink to="http://localhost:8000/">로그인</StyledLink>
      </Msg_Container>
    </Full_Container>
  );
}
