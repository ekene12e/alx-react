import { shallow } from 'enzyme';
import Notifications from './Notifications';
import Adapter from 'enzyme-adapter-react-16';

describe('<Notifications/>', ()=> {
    it('Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists('NotificationItem')).toBe(true);
    });

    it('Notifications renders the text Here is the list of notifications', ()=> {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.html()).toContain('New course available');
    })

    it('menu item is displayed when displayDrawer is false', ()=> {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.html()).toContain('Your notifications');
        expect(wrapper.find('div')).toHaveLength(1);
    })
})