import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

class Product extends React.Component {
  static propTypes = {
    // from Catalog
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }

  render() {
    const { name, img, description } = this.props
    return (
      <Card style={{ width: '28rem' }} className="m-3">
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Img src={img} />
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Product
