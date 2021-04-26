import React from "react";
import { StyledPageContainer } from "../../styles/Global";
import { Button, Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useLogin } from "../../service/account/accountService";
import LoadingWrapper from "../../components/LoadingWrapper";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [loginUser, { loading }] = useLogin();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const loginFormSubmitHandler = async (data) => {
    console.log(data, "DATA");
    try {
      await loginUser({
        email: data.email,
        password: data.password,
      });
      history.push("/home");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StyledPageContainer>
      <LoadingWrapper loading={loading}>
        <Grid container>
          <Grid container justify="center">
            Login
          </Grid>
          <Grid container justify="center">
            <form onSubmit={handleSubmit(loginFormSubmitHandler)}>
              <Grid item xs={12} m={6}>
                <TextField
                  inputRef={register}
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                ></TextField>
              </Grid>
              <Grid item xs={12} m={6}>
                <TextField
                  inputRef={register}
                  name="password"
                  label="password"
                  type="password"
                  id="password"
                ></TextField>
              </Grid>
              <Grid container justify="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Login
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </LoadingWrapper>
    </StyledPageContainer>
  );
};

export default Login;
