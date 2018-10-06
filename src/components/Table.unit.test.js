import React from 'react'
import { shallow } from 'enzyme'
import Table from './Table'

describe('Table', () => {
  it('should render without crashing', () => {
    shallow(<Table />)
  })
})