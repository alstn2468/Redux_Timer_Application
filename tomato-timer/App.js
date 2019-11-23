import React from "react";
import Timer from "./components/Timer";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import devToolsEnhancer from "remote-redux-devtools";

let store = createStore(reducer, devToolsEnhancer({ realtime: true }));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Timer />
            </Provider>
        );
    }
}
