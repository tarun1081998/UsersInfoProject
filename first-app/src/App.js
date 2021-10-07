import './App.css';
import AddUser from './components/AddUser';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import EditUser from './components/EditUser';
function App() {

  // const id = useParams();
  return (
    
      <section>
      <BrowserRouter>
          <Switch>
            <Route path="/adduser">
              <AddUser />
            </Route>
            <Route path="/edituser/:id">
              <EditUser />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;