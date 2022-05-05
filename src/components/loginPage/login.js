import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/reducers";
import { LoginStyle, Input, Button, Form, Image } from "./styleLogin";
import Logout from "./logout";
import User from "./user";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(changeUser(name));
    navigate("/search");
  };
  let onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <LoginStyle>
        <Form>
          <Image>
            <img
              width="250px"
              decoding="async"
              alt="Pokemon"
              src="https://observatoriodatv.uol.com.br/wp-content/uploads/2016/08/pokemon.jpg"
            />
          </Image>
          <User />
          <Input
            placeholder="Insira um usuário"
            id="name"
            onChange={onChange}
            type="text"
          />
          <Button type="button" onClick={handleLogin}>
            entrar
          </Button>
          <Logout />
        </Form>
      </LoginStyle>
    </>
  );
};
export default Login;
