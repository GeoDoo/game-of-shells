import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

it('should render the App without crashing', () => {
  shallow(<App />)
})