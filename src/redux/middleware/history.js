import { routerHistory } from "../../routerHistory";
import { historyPush } from "../utilityActions";

const processHistoryPush = () => (next) => async (action) => {
    if (action.type !== historyPush.type) {
        return next(action);
    }
    routerHistory.push(action.payload);
};

export default processHistoryPush;
