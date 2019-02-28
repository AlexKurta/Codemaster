import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import catalog from './reducer/catalog'

export default history =>
  combineReducers({
    router: connectRouter(history),
    catalog,
  })
