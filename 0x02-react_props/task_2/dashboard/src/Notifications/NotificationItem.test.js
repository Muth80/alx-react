import React from 'react'
import { shallow } from 'enzyme'
import NotificationItem from './NotificationItem'

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />)
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>')
  })

  it('renders with html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>'}} />)
    expect(wrapper.html()).toEqual('<li data-notification-type="default"><u>test</u></li>')
  })
})
