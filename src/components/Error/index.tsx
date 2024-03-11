import { Alert, SimpleCell, Title } from "@vkontakte/vkui";
import useError from "../../hooks/useError";
import { Icon24ErrorCircleFillRed } from "@vkontakte/icons";

function Error() {
    const error = useError();

    if (!error) {
        return;
    }

    return (
        <Alert
            actions={[
                {
                    title: "Попробовать снова",
                    mode: "default",
                },
            ]}
            actionsAlign="right"
            actionsLayout="horizontal"
            header={
                <SimpleCell before={<Icon24ErrorCircleFillRed />}>
                    <Title>Произошла ошибка</Title>
                </SimpleCell>
            }
            onClose={error.tryAgain}
            text={error.message}
        />
    );
}

export default Error;
