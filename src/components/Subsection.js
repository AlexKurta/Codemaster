import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Subsection extends React.Component {
  static propTypes = {
    // from Catalog
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }

  render() {
    const { name, url, img } = this.props
    return (
      <div className="col-3 m-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="bottom" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Link to={url}>See more</Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Subsection
