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
import { GroupContextProvider } from "./context/GroupContext";
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
                        <GroupContextProvider store={store}>
                            <Panel>
                                <PanelHeader>Группы</PanelHeader>
                                <SplitLayout className="center">
                                    <SplitCol maxWidth={560}>
                                        <FilterView />
                                        <GroupListView />
                                    </SplitCol>
                                </SplitLayout>
                            </Panel>
                            <Error />
                        </GroupContextProvider>
                    </AppRoot>
                </AdaptivityProvider>
            </ConfigProvider>
        </ErrorBoundary>
    );
}

export default App;
