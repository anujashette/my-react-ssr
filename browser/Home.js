import React from "react";
import { hydrate } from "react-dom";
import Header from "../views/HomeComponents/Header.js";

hydrate(<Header/>, document.getElementById("app"));