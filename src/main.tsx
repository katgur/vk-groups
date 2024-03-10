import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Store from "./store/index.tsx";

const store = new Store();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App store={store} />
    </React.StrictMode>
);
