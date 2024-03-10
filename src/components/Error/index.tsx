import useError from "../../hooks/useError";
import style from "./style.module.css";

function Error() {
    const error = useError();

    if (!error) {
        return;
    }

    return <p className={style.error}>{error}</p>;
}

export default Error;
