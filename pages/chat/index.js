import React, { useContext } from "react";

import { Context } from "../../contex";

import { useRouter } from "next/router";

import axios from "axios";
import Header from "../../components/Header";

const Auth = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "3bdbc86e-236d-44c6-be1f-7bf0bef259df" } }
      )

      .then((r) => {
        router.push("/chat/chats");
      });
  }

  return (
    <div>
      <Header/>
    <div className="p-24 absolute top-0 left-12">
      
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="pb-5 w-full text-center text-white text-2xl">Enter Credentials to Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Auth;