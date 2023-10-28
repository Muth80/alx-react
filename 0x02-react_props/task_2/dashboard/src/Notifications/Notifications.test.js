import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('check that the component renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    
    expect(wrapper.find(NotificationItem)).toExist();
  });

  it('verify that the first NotificationItem element renders the right html', () => {
    const listNotifications = [{id: 1, type: 'default', value: 'Test', html: null}];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
    expect(wrapper.find(NotificationItem).first().html()).toEqual('<li data-notification-type="default">Test</li>');
  });
});
