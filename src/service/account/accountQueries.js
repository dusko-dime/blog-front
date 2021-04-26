/* eslint-disable prettier/prettier */
import { gql } from "@apollo/client";

export const REGISTER_ACCOUNT = gql`
  mutation RegisterAccount($email: String!, $password: String!) {
    registerAccount(
      registerAccountInput: { email: $email, password: $password }
    ) {
      id
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      username
      accessToken
    }
  }
`;
