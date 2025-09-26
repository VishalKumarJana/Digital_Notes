import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ContextProvider } from "./store/ContextApi";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import { thunk } from "redux-thunk";
import { authReducer } from "./redux-store/reducers/authReducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  // your reducers here
  auth: authReducer,
  // notes: notesReducer,
});
const persistorConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistorConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>
);

