import { shallow } from "enzyme";
import { CourseList } from "./CourseList";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('<CourseList />', ()=> {
    it('renders without crashing', ()=> {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    })

    it('renders 5 differnet rows', ()=> {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('tr')).toHaveLength(5);
    })
})