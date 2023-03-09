import React, { useState } from "react";
import Mask from "../../assets/images/Mask.svg";
import Tree from "../../assets/images/Tree.svg";
import Tree3 from "../../assets/images/Tree2-1.svg";
import { api } from "../../utils/api";
import Anchor from "../atoms/Anchor";
import Button from "../atoms/Button";
import Input from "../atoms/InputEmail";
import FormTemplate from "../templates/FormTemplate";


const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await api.post("http://localhost:8080/v1/login", { email, password })
      console.log(res.data.data);
      return res

    } catch (error) {
      console.log(error);

    }
  }
  return (
    <FormTemplate
      title="Welcome to CMS Admin! 👋🏻"
      content="Please sign-in to your account and start the adventure"
      src={Tree3}
      image={Tree}
      background={Mask}
      onsubmit={handleLogin}
    >
      <div className="p-6">
        <Input type="email" placeHolder="email" style='mb-5' onchange={(e) => setEmail(e.target.value)} value={email}/>
        <Input type="password" placeHolder={'Password'} onchange={(e) => setPassword(e.target.value)} value={password} />
      </div>
      <div className="flex flex-row justify-between text-[14px] mx-10">
        <input type="checkbox" id="rember-me" />
        <label>Rember Me </label>
        <a href="/">Forgot Password</a>
      </div>
      <div className="mx-10">
        <Button
          title="LOGIN"
          action={(e) => { }}
        />
        <p className="text-base">New on out Platform? <Anchor internal title="Signup" url="/register" /></p>
      </div>
    </FormTemplate>
  );
};

export default LoginForm;
