import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from './components/projects/ProjectDetails'
import Signup from "./components/auth/Signup";
import SignIn from "./components/auth/SignIn";
import CreateProject from "./components/projects/CreateProject";

function App() {
    return (
        <BrowserRouter>
            <div className="App" style={{
                background: 'url("/assets/mario-bg.png") no-repeat',
                backgroundSize: '100%',
                height: '100vh',
                backgroundPosition: 'bottom',
                backgroundColor: '#95e8f3'
            }}>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/project/:id' component={ProjectDetails}/>
                    <Route path='/signin' component={SignIn}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/create' component={CreateProject}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
