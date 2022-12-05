import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./components/CustomButton";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
    },
    {
      id: 2,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
    },
  ]);

  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
      contents: contents,
    };
    setUsers([...users, newUser]);
  };

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };

  return (
    <div className="allbox">
      <div className="topbar">
        <div className="topbar_todo"> My Todo List</div>
        <div className="topbar_react">React</div>
      </div>

      <div className="inputside">
        <div className="input_group">
          <label className="form_label">제목</label>
          <input
            className="add_input"
            value={contents}
            placeholder="이름을 입력해주세요"
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setContents(e.target.value)}
          />
          <label className="form_label">내용</label>
          <input
            className="add_input"
            value={title}
            placeholder="나이를 입력해주세요"
            // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <CustomButton className="addBtn" color="teal" onClick={addUserHandler}>
          추가하기
        </CustomButton>
      </div>

      <div className="list_contain">
        <h2>Working.. 🔥</h2>
        <div className="app-style">
          {users.map((user) => {
            return (
              <User
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id}
              ></User>
            );
          })}
        </div>

        <h2>Done..! 🎉</h2>
        <div className="app-style">
          {users.map((user) => {
            return (
              <User
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id}
              ></User>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
