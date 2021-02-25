import React, { useEffect } from "react";
import { useHistory } from "react-router";
import goToSignUp from "../Router/Coodinator"

export default function Signup() {
  const history = useHistory();
  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/");
    }
  }, [history]);

  const handleSignup = async (event) => {
    event.preventDefault();

    const body = {
      name: form.nome,
      email: form.email,
      cpf: form.cpf,
      password: form.senha,
    };

    try {
      const response = await axios.post(``, body);

      console.log("RESPONSE", response);
      localStorage.setItem("token", response.data.token);
      history.push("/signup/address");

    } catch (error) {
      alert("Cadastro falhou, tente novamente.");
      console.error(error);
    }
  };

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      </div>
  );
}
