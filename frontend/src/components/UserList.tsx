import React, { useEffect, useState } from "react";
import axios from "axios";

let exportedUsers: never[] = [];

export const getUsers = () => exportedUsers;

interface User {
    _id: string;
    User_ID: string;
    User_NICKNAME: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]); // 사용자 데이터를 저장할 상태

    useEffect(() => {
        // 백엔드에서 사용자 데이터 가져오기
        axios
            .get("http://localhost:5000/api/users")
            .then((response) => {
                console.log("가져온 데이터:", response.data);
                setUsers(response.data); // 사용자 데이터 상태 업데이트
                exportedUsers = response.data;
            })
            .catch((error) => {
                console.error("데이터 가져오기 실패:", error);
            });
    }, []);

    return (
        <div>
            <h2>사용자 목록</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user._id}>
                            ID: {user.User_ID}, 닉네임: {user.User_NICKNAME}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>사용자 데이터가 없습니다.</p>
            )}
        </div>
    );
};

export default UserList;
