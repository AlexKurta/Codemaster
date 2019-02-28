import React from 'react'
import { Route } from 'react-router-dom'
import Catalog from './components/Catalog'
import { Container } from 'react-bootstrap'

class App extends React.Component {
  getCatalog = ({ location }) => {
    return (
      <Container className="row">
        <Catalog url={location.pathname} />
      </Container>
    )
  }

  render() {
    return <Route path="/" render={this.getCatalog} />
  }
}

export default App
