import logo from '../holberton-logo.jpg'
import { css, StyleSheet } from 'aphrodite';


function Header() {
    return (
        <div className={css(stylesHeader.header)}>
            <img src={logo} className={css(stylesHeader.logo)} alt="logo" />
            <h1 className={css(stylesHeader.h1)}>School dashboard</h1>
        </div>
    );
}

const stylesHeader = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '3px solid #e2354e',
        color: '#e2354e'
    },
    h1: {
        display: 'inline',
        padding: '100px 0'
    },
    logo: {
        height: '30vh'
    }
})

export { Header }