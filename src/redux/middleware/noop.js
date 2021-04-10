import _ from "lodash/fp";

export const noop = ({ dispatch }) => (next) => (action) => {
    if (!_.isEmpty(action) && !_.isNil(action) && _.get("type", action)) {
        next(action);
    }
};
