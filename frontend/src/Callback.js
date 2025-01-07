// import React, { useEffect } from "react";

// const Callback = () => {
//     useEffect(() => {
//         const searchParams = new URLSearchParams(window.location.search);
//         const code = searchParams.get("code");
//         const state = searchParams.get("state");

//         console.log("Code:", code);
//         console.log("State:", state);

//         // 백엔드로 code와 state 전달
//         fetch(`http://localhost:5001/auth/naver/callback?code=${code}&state=${state}`)
//             .then((res) => res.json())
//             .then((data) => console.log("User data:", data))
//             .catch((error) => console.error("Error:", error));
//     }, []);

//     return <div>Processing login...</div>;
// };

// export default Callback;
