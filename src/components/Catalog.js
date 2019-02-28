import React from 'react'
import { connect } from 'react-redux'
import { loadCatalog } from '../active creators'
import { getDataForCurrentUrl } from '../Utils'
import Subsection from './Subsection'
import Product from './Product'
import PropTypes from 'prop-types'

class Catalog extends React.Component {
  static propTypes = {
    // from connect
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    loadCatalog: PropTypes.func.isRequired,
    catalog: PropTypes.arrayOf(PropTypes.object),
  }

  componentDidMount() {
    const { loading, loaded, loadCatalog } = this.props
    if (!loaded && !loading) loadCatalog()
  }

  render() {
    const { catalog } = this.props
    const catalogItems = []

    if (catalog) {
      for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].sections) {
          catalogItems.push(
            <Subsection
              name={catalog[i].name}
              url={catalog[i].url}
              img={catalog[i].img}
              key={catalog[i].id}
            />
          )
        } else {
          catalogItems.push(
            <Product
              name={catalog[i].name}
              img={catalog[i].img}
              description={catalog[i].description}
              key={catalog[i].id}
            />
          )
        }
      }
    } else return null

    return <div className="test__catalog--container row">{catalogItems}</div>
  }
}

export default connect(
  (state, ownProps) => {
    return {
      catalog:
        ownProps.url === '/'
          ? state.catalog.catalog
          : getDataForCurrentUrl(state.catalog.catalog, ownProps.url),
      loading: state.catalog.loading,
      loaded: state.catalog.loaded,
    }
  },
  { loadCatalog }
)(Catalog)
