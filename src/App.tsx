import './App.css';
import {Header} from './layout/header/Header';
import { About } from './layout/section/about/About';
import { Home } from './layout/section/home/Home';
import { Skills } from './layout/section/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
            <Skills/>
        </div>
    );
}

export default App;


