import React from 'react';
import './App.css';
import {Provider} from 'mobx-react';
import ThemeStore from './stores/ThemeStore';
import MainUI from "./modules/main";

function App() {
    return (<div className="App">
        <Provider ThemeStore={ThemeStore}>
            <MainUI/>
        </Provider>
    </div>);
}

export default App;
