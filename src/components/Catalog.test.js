import React from 'react'
import Catalog from './Catalog'
import { mount } from 'enzyme'
import store from '../redux'
import { history } from '../redux/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

describe('Catalog', () => {
  it('should render Catalog', () => {
    const container = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Catalog url="/" />
        </ConnectedRouter>
      </Provider>
    )
    expect(container.find('.test__catalog--container').length).toEqual(1)
  })
})
