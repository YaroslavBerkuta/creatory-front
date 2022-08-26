import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { portfolioReducer } from "./reducers/portfolioReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReduser = combineReducers({ project: portfolioReducer });

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReduser);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
