import { shallow } from 'enzyme';
import { Login } from '../Login/Login.js';
import Adapter from 'enzyme-adapter-react-16';

describe('<Login/>', ()=> {
    it('renders Login component without crashing', ()=> {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Login renders img', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(2);
    });

    it('Login renders h1', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label').length).toBe(2);
    });
});