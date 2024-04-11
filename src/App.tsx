import './App.css';
import {Header} from './layout/header/Header';
import { About } from './layout/section/about/About';
import { Home } from './layout/section/home/Home';


function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
        </div>
    );
}

export default App;


