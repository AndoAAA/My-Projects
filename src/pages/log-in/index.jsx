import * as S from "./styled.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";
import { ROUTES } from "../../utils/constant.js"
import Input from "../../commons/input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA.loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.getItem("data", JSON.stringify(data));

    navigate(ROUTES.shop);
  };



  return (
    <S.FormContainer className="container">
      <S.PageTitle>Login page</S.PageTitle>
      <S.LoginForm action="" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Email *"
          register={register("email")}
          error={errors?.email}
        />

        <Input
          type="password"
          placeholder="Password *"
          register={register("password")}
          error={errors?.password}
          isPasswordMode={true}
        />
        <S.LoginButton>Login</S.LoginButton>
      </S.LoginForm>
    </S.FormContainer>
  );
};

export default Login;
