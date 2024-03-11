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
import FilterView from "./components/FilterView";
import GroupListView from "./components/GroupListView";
import ContextProvider from "./context/Context";
import Store from "./store";
import ErrorBoundary from "./components/ErrorBoundary";

interface AppProps {
    store: Store;
}

function App({ store }: AppProps) {
    return (
        <ErrorBoundary>
            <ConfigProvider>
                <AdaptivityProvider>
                    <AppRoot>
                        <ContextProvider store={store}>
                            <Panel>
                                <PanelHeader>Группы</PanelHeader>
                                <SplitLayout
                                    style={{ justifyContent: "center" }}
                                >
                                    <SplitCol maxWidth={560}>
                                        <FilterView />
                                        <GroupListView />
                                    </SplitCol>
                                </SplitLayout>
                            </Panel>
                            <Error />
                        </ContextProvider>
                    </AppRoot>
                </AdaptivityProvider>
            </ConfigProvider>
        </ErrorBoundary>
    );
}

export default App;
