import React, { useEffect } from "react";
import axios from "axios";


const KakaoCallback = () => {
    useEffect(() => {
        const params = new URL(document.location.toString()).searchParams;
        const code = params.get("code");
        const grant_type = "authorization_code"
        const client_id = `${process.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`
        const REDIRECT_URI = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`

        axios
            .post(
                `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
                {},
                {
                    headers: {
                        "Content-type":
                            "application/x-www-form-urlencoded;charset=utf-8",
                    },
                }
            )
            .then((res) => {
                console.log(res);
                const { data } = res;
                const { access_token } = data;

                if (access_token) {
                    console.log(`Bearer ${access_token}`);
                    axios
                        .post(
                            "https:kapi.kakao.com/v2/user/me",
                            {},
                            {
                                headers: {
                                    Authorization: `Bearer ${access_token}`,
                                    "Content-type": "application/x-www-form-urlencoded",
                                },
                            }
                        )
                        .then((res) => {
                            console.log("데이터 성공 : ");
                            console.log(res);

                            axios
                                .post("http://localhost:5000/api/users", res.data) // 서버의 엔드포인트로 POST 요청
                                .then((serverRes) => {
                                    console.log("서버 저장 성공:", serverRes.data);
                                })
                                .catch((err) => {
                                    console.error("서버 저장 실패:", err);
                                });
                        });

                } else {
                    console.log("access_token 없음");
                }

            });
    }, []);
    return (
        <div>
            <h5>로그인 중</h5>
        </div>
    );
};



export default KakaoCallback;