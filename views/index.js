import React from "react";
import ReactDOM from "react-dom";
import  { BrowserRouter }  from "react-router-dom";
import App from "./sampleComponent/app";

ReactDOM.hydrate(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
document.getElementById("app")
)
;

module.hot.accept();
