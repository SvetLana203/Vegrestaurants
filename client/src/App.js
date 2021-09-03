import React, { useState } from 'react'
import './App.css'

import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import ListPlaces from './pages/ListPlaces'
import AddPlace from './pages/AddPlace'
import NavBar from './components/NavBar'
function App() {
  const [newPlace, setNewPlace] = useState({ title: '', url: '', location: '' })

  const handleChange = (e) => {
    setNewPlace({ ...newPlace, [e.target.name]: e.target.value })
  }

  const clearForm = () => {
    setNewPlace({ title: '', url: '', location: '' })
  }
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listplaces" component={ListPlaces} />
          <Route
            path="/create"
            render={(props) => (
              <AddPlace
                {...props}
                form={newPlace}
                handleChange={handleChange}
                clearForm={clearForm}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
