import { LOAD_CATALOG } from '../constants'

export function loadCatalog() {
  return {
    type: LOAD_CATALOG,
    callApi: '../../catalogTree.json',
  }
}
