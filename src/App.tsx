import {
    AdaptivityProvider,
    AppRoot,
    ConfigProvider,
    Panel,
    PanelHeader,
    SplitCol,
    SplitLayout,
} from "@vkontakte/vkui";
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
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <ContextProvider store={store}>
                        <Panel>
                            <PanelHeader>Группы</PanelHeader>
                            <SplitLayout style={{ justifyContent: "center" }}>
                                <SplitCol autoSpaced>
                                    <Filter />
                                </SplitCol>
                                <SplitCol autoSpaced>
                                    <GroupList />
                                </SplitCol>
                                <Error />
                            </SplitLayout>
                        </Panel>
                    </ContextProvider>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
