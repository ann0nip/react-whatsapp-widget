import React from 'react'
import { shallow } from 'enzyme'
import Index from '../index'
import App from '../components/App'

let wrapped
beforeEach(() => {
  wrapped = shallow(<Index />)
})

it('should render App component', () => {
  expect(wrapped.find(App).length).toBe(1)
})

it('should render WhatsAppButton component', () => {
  expect(wrapped.find(App).length).toBe(1)
})
