import React from 'react'
import { Route } from 'react-router-dom'
import Catalog from './components/Catalog'

class App extends React.Component {
  getCatalog = ({ location }) => {
    return <Catalog url={location.pathname} />
  }

  render() {
    return <Route path="/" render={this.getCatalog} />
  }
}

export default App
