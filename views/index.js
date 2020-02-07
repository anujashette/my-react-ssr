import React from "react";
import ReactDOM from "react-dom";
import  { BrowserRouter }  from "react-router-dom";

import App from "./sampleComponent/app";

ReactDOM.render(
    <BrowserRouter>
        <App data={window.__INITIAL_DATA__}/>
    </BrowserRouter>,
document.getElementById("app")
)
;
