import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Store from "./store/index.tsx";
import "@vkontakte/vkui/dist/vkui.css";

const store = new Store();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <App store={store} />
);
