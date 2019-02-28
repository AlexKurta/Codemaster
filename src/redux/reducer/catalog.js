import { LOAD_CATALOG, START, SUCCESS } from '../../constants'

const defaultCatalog = {
  loading: false,
  loaded: false,
  catalog: [],
}

export default (catalogState = defaultCatalog, action) => {
  const { type, response } = action
  switch (type) {
    //start loading
    case LOAD_CATALOG + START:
      return { ...catalogState, loading: true, loaded: false }

    //catalog loaded
    case LOAD_CATALOG + SUCCESS:
      return {
        ...catalogState,
        catalog: response,
        loading: false,
        loaded: true,
      }

    default:
      return catalogState
  }
}
