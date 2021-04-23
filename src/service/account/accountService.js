import { useMutation } from "@apollo/client";
import { LOGIN, REGISTER_ACCOUNT } from "../account/accountQueries";

export const useRegisterAccount = () => {
  const [registerAccount, { loading, data }] = useMutation(REGISTER_ACCOUNT);

  const callRegisterAccount = ({ email, password }) => {
    return registerAccount({
      variables: {
        email,
        password,
      },
    });
  };

  return [callRegisterAccount, { loading, data }];
};

export const useLogin = () => {
  const [login, { loading, data }] = useMutation(LOGIN);

  const callLogin = ({ email, password }) => {
    console.log(email, password, "PASS");
    return login({
      variables: {
        email,
        password,
      },
    });
  };

  return [callLogin, { loading, data }];
};
