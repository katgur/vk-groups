import Error from "./components/Error";
import Filter from "./components/Filter";
import GroupList from "./components/GroupList";
import ContextProvider from "./context/Context";
import Store from "./store";

interface AppProps {
    store: Store;
}

function App({ store }: AppProps) {
    return (
        <ContextProvider store={store}>
            <Filter />
            <GroupList />
            <Error />
        </ContextProvider>
    );
}

export default App;
