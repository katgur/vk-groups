import { useEffect, useState } from "react";
import api from "./services/mock/groups";
import { GetGroupsResponse } from "./types/groups";

function App() {
    const [data, setData] = useState<GetGroupsResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.getGroups()
            .then((data) => setData(data))
            .catch((error) => setError(error));
    }, []);

    if (error) {
        return <>{`Произошла ошибка: ${error.message}`}</>;
    }

    if (!data) {
        return <>...Loading</>;
    }

    return <>{JSON.stringify(data)}</>;
}

export default App;
