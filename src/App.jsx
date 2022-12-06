import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import "./index.css";
import CustomButton from "./components/CustomButton";
import Working from "./components/Working";
import Done from "./components/Done";

const App = () => {
  const [working, setWorkings] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
    },
  ]);

  const [done, setDones] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부해봅시다.",
    },
  ]);

  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  const addWorkingHandler = () => {
    const newWorking = {
      id: working.length + 1,
      title: title,
      contents: contents,
    };
    setWorkings([...working, newWorking]);
  };

  const deleteWorkingHandler = (id) => {
    const newWorkingList = working.filter((working) => working.id !== id);
    setWorkings(newWorkingList);
  };

  const doneWorkingHandler = (workingId, workingTitle, workingContents) => {
    const newDone = {
      id: done.length + 1,
      title: workingTitle,
      contents: workingContents,
    };
    setDones([...done, newDone]);

    deleteWorkingHandler(workingId);
  };

  const deleteDoneHandler = (id) => {
    const newDoneList = done.filter((done) => done.id !== id);
    setDones(newDoneList);
  };

  const backWorkingHandler = (doneId, doneTitle, doneContents) => {
    const newWorking = {
      id: working.length + 1,
      title: doneTitle,
      contents: doneContents,
    };
    setWorkings([...working, newWorking]);

    deleteDoneHandler(doneId);
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
            // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
            onChange={(e) => setContents(e.target.value)}
          />
          <label className="form_label">내용</label>
          <input
            className="add_input"
            value={title}
            // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <CustomButton addcolor="teal" onClick={addWorkingHandler}>
          추가하기
        </CustomButton>
      </div>

      <div className="list_contain">
        <h2>Working.. 🔥</h2>
        <div className="app-style">
          {working.map((working) => {
            return (
              <Working
                handleDone={doneWorkingHandler}
                handleDelete={deleteWorkingHandler}
                working={working}
                key={working.id}
              ></Working>
            );
          })}
        </div>

        <h2>Done..! 🎉</h2>
        <div className="app-style">
          {done.map((done) => {
            return (
              <Done
                handleback={backWorkingHandler}
                handleDelete={deleteDoneHandler}
                done={done}
                key={done.id}
              ></Done>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
