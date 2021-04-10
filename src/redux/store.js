import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import { apiMiddleware, multi, noop, history } from "./middleware";

import rootReducer from "./rootReducer";

const middleware = [multi, thunk, noop, history, logger, apiMiddleware];

export default configureStore({ reducer: rootReducer, middleware: middleware });
