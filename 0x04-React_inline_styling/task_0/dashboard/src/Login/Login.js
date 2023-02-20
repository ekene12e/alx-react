import './Login.css';

function Login() {
    return (
        <>
          <p>Login to access the full dashboard</p>
          <label htmlFor='emailInput'>Email: </label>
          <input id='emailInput' type='text'></input>
          <label htmlFor='passwordInput'> Password: </label>
          <input id='passwordInput' type='password'></input>
          <button>OK</button>
        </>
      );
}

export { Login }