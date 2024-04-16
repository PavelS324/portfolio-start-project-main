import './App.css';
import {Header} from './layout/header/Header';
import { About } from './layout/section/about/About';
import { Contacts } from './layout/section/contacts/Contacts';
import { Home } from './layout/section/home/Home';
import { Projects } from './layout/section/projects/Projects';
import { Skills } from './layout/section/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;


