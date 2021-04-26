import { useMutation } from "@apollo/client";
import { LOGIN, REGISTER_ACCOUNT } from "../account/accountQueries";
import { useAppStateValue } from "../../context/AppContext";

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
  const { authorizeTo } = useAppStateValue();

  const callLogin = ({ email, password }) => {
    return login({
      variables: {
        email,
        password,
      },
    }).then(({ data }) => {
      authorizeTo(true, data.login.accessToken);
    });
  };

  return [callLogin, { loading, data }];
};
