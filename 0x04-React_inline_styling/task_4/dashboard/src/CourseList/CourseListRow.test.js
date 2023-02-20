import { shallow } from "enzyme";
import { CourseListRow} from "./CourseListRow";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('<CourseListRow/>', ()=> {
    it('when isHeader is true, render th with colSpan 2', ()=> {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='hello world'/>);
        expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    })

    it('when isHeader is true, and textSecondCell is true', ()=> {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='hello' textSecondCell='world'/>);
        expect(wrapper.find('th')).toHaveLength(2);
    })

    it('when isHeader is false, it renders two td within one tr', ()=> {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='hello' textSecondCell='world'/>)
        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('tr').children('td')).toHaveLength(2);
    })
})