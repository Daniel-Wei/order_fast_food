import Menu from "./Components/Menu";
import appModule from './App.module.css';

const App = () => {
    return <div className={appModule.app}>
        <Menu/>
    </div>
}

export default App;