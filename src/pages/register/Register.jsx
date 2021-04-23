import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useRegisterAccount } from "../../service/account/accountService";
import LoadingWrapper from "../../components/LoadingWrapper";
import { StyledPageContainer } from "../../styles/Global";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [registerAccount, { loading }] = useRegisterAccount();

  const registerFormSubmitHandler = async (data) => {
    const response = await registerAccount({
      email: data.email,
      password: data.password,
    });
    console.log(response, "ODGOVOR");
  };

  return (
    <StyledPageContainer>
      <LoadingWrapper loading={loading}>
        <Grid container>
          <Grid container justify="center">
            Registracija
          </Grid>
          <Grid container justify="center">
            <form onSubmit={handleSubmit(registerFormSubmitHandler)}>
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
              <Grid item xs={12} m={6}>
                <TextField
                  inputRef={register}
                  name="repeatPassword"
                  label="repeatPassword"
                  type="password"
                  id="repeatPassword"
                ></TextField>
              </Grid>
              <Grid container justify="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Register
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </LoadingWrapper>
    </StyledPageContainer>
  );
};

export default Register;
