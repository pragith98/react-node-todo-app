import { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { registerUser } from "../store/auth.slice";
import type { UserToCreate } from "../types/user.type";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isAuth, error } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickRegister = () => {
    const user: UserToCreate = {
      email,
      password,
    };

    dispatch(registerUser(user));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
            className={inputFieldClasses}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            autoComplete="current-password"
            className={inputFieldClasses}
          />
        </div>
      </div>

      {error?.length ? <p className="text-red-500">{error}</p> : ""}

      <Button variant="primary" onClick={onClickRegister}>
        Register
      </Button>
    </form>
  );
}

const inputFieldClasses = `
  block 
  w-full 
  rounded-md 
  bg-white 
  px-3 
  py-1.5 
  text-base 
  text-gray-900 
  outline-1 -outline-offset-1 
  outline-gray-300 
  placeholder:text-gray-400 
  focus:outline-2 
  focus:-outline-offset-2 
  focus:outline-indigo-600 
  sm:text-sm/6
`;

export default RegistrationForm;
