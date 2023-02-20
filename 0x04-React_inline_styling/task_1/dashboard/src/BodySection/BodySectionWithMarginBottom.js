import {Component} from 'react';
import {BodySection} from './BodySection';
import { css, StyleSheet } from 'aphrodite';


class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={css(stylesBodyWithMargin.margin)}>
                <BodySection {...this.props} />
            </div>
        )
    }
}

const stylesBodyWithMargin = StyleSheet.create({
    margin: {
        marginBottom: 40
    }
})

export { BodySectionWithMarginBottom }