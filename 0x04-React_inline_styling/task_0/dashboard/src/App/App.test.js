import { shallow } from 'enzyme';
import { CourseList } from '../CourseList/CourseList';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

describe('<App/>', ()=> {
    it('renders without crashing', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Checks for Notification component', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Notifications />)).toBe(true);
    });

    it('Checks for Header component', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).toBe(true);
    });

    it('Checks for Login component', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toBe(true);
    });

    it('Checks for Footer component', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Footer />)).toBe(true);
    });

    it('CourseList is not displayed', ()=> {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<CourseList />)).toBe(false);
    })
});

describe('<App />', ()=> {
    it('LoggedIn is true, so Login shouldnt exist', ()=> {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.contains(<Login />)).toBe(false);
    })

    it('LoggedIn is true, so CourseList should exist', ()=> {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.contains(<CourseList />)).toBe(true);
    })
})
