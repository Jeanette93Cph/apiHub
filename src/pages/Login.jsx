import styled from "styled-components";

const StyledForm = styled.form`
  border: 1px solid black;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
`;

function Login() {
    return ( 
        <>
        <h1>Login</h1>
        <StyledForm>
        <p>Please login to continue</p>
        <label>
          Username:
          <input type="text" placeholder="Username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" placeholder="Password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </StyledForm>
      </>
    );
}

export default Login;