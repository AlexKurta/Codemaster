import React from 'react'
import { mount } from 'enzyme'
import Product from './Product'

describe('Product', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Product name="test" />)
    expect(wrapper.props().name).toEqual('test')

    wrapper.setProps({ name: 'test' })
    expect(wrapper.props().name).toEqual('test')
  })
})
