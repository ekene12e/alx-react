import {Component} from 'react';
import {BodySection} from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='bodySectionWithMargin'>
                <BodySection {...this.props} />
            </div>
        )
    }
}

export { BodySectionWithMarginBottom }