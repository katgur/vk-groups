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
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <ConfigProvider>
                <AdaptivityProvider>
                    <AppRoot>
                        <Panel>
                            <PanelHeader>Группы</PanelHeader>
                            <SplitLayout className="center">
                                <SplitCol maxWidth={560}>
                                    <GroupContextProvider>
                                        <FilterView />
                                        <GroupListView />
                                        <Error />
                                    </GroupContextProvider>
                                </SplitCol>
                            </SplitLayout>
                        </Panel>
                    </AppRoot>
                </AdaptivityProvider>
            </ConfigProvider>
        </ErrorBoundary>
    );
}

export default App;
