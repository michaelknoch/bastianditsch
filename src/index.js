import React from "react";
import ReactDOM from "react-dom";
import smoothscroll from "smoothscroll-polyfill";

import App from "./App";

// client only
if (typeof window !== "undefined") {
    smoothscroll.polyfill();
}

export default App;

if (typeof document !== "undefined") {
    const renderMethod = module.hot
        ? ReactDOM.render
        : ReactDOM.hydrate || ReactDOM.render;

    const render = Comp => {
        renderMethod(<Comp />, document.getElementById("root"));
    };

    render(App);
    if (module.hot) {
        module.hot.accept("./App", () => render(require("./App").default));
    }
}