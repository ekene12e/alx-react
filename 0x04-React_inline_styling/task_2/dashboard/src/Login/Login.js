import { css, StyleSheet } from 'aphrodite';

function Login() {
    return (
        <>
          <div className={css(stylesLogin.appBody)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor='emailInput'>Email: </label>
            <input id='emailInput' type='text'></input>
            <label htmlFor='passwordInput'> Password: </label>
            <input id='passwordInput' type='password'></input>
            <button>OK</button>
          </div>
        </>
      );
}

const stylesLogin = StyleSheet.create({
  appBody: {
    height: '100%',
    padding: 20,
    fontSize: '1.5rem'
  }
})

export { Login }