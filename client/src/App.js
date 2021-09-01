import logo from './logo.svg'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import ListPlaces from './pages/ListPlaces'
import AddPlace from './pages/AddPlace'
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listplaces" component={ListPlaces} />
          <Route path="/create" component={AddPlace} />
        </Switch>
      </main>
    </div>
  )
}

export default App
