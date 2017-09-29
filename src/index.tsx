import React from "react";
import ReactDOM from "react-dom";
import NewMain from "./components/Main/main";
import S from "./components/Secondary/one";
import "index.less";

const App = () => {
    return (
        <div>
            <p>Hello World</p>
            <NewMain />
            <S text="Hot reload for pescript in action" />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
