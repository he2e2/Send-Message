const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 8000;

const clientId = "클라이언트 ID";
const clientSecret = "Secret Key";
const redirectUri = "http://localhost:8000/redirect";
let accessToken = null;

app.use(cors());

// "localhost:8000/" 경로 이동 시 "localhost:8000/redirect" 로 리다이렉션.
app.get("/", (req, res) => {
  res.redirect(
    `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=talk_message`
  );
});

/*
"localhost:8000/redirect" 경로 이동 시 인가 코드와 액세스 토큰을 얻기 위해 시도하고 
성공 시 "localhost:3000/message" 경로로 리다이렉션,
실패 시 응답으로 실패 메시지 전송.
*/
app.get("/redirect", async (req, res) => {
  const authorizationCode = req.query.code;

  try {
    const tokenResponse = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      null,
      {
        params: {
          grant_type: "authorization_code",
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri,
          code: authorizationCode,
          scope: "talk_message",
        },
      }
    );

    accessToken = tokenResponse.data.access_token;
    res.redirect(`http://localhost:3000/message`);
  } catch (error) {
    console.error("액세스 토큰 요청 실패:", error.response.data);
    res.send("액세스 토큰 요청 실패");
  }
});

/*
"localhost:8000/message" 경로 이동 시 카카오 API를 이용해 나에게 메시지 보내기를 시도하고 
성공 시 응답으로 성공 메시지 전송,
실패 시 응답으로 실패 메시지 전송.
*/
app.get("/message", async (req, res) => {
  if (!accessToken) {
    res.send("액세스 토큰이 없습니다. 먼저 인가를 수락하세요.");
    return;
  }
  try {
    const response = await axios.post(
      "https://kapi.kakao.com/v2/api/talk/memo/default/send",
      {
        template_object: JSON.stringify({
          object_type: "text",
          text: "안녕하세요!",
          link: {
            web_url: "https://www.naver.com",
          },
          button_title: "자세히 보기",
        }),
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.send("메시지 전송 성공!");
  } catch (error) {
    console.error("메시지 전송 실패:", error.response.data);
    res.send("메시지 전송 실패");
  }
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 실행 중입니다.`);
});
