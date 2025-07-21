import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { resetAuthError } from "../store/auth.slice";

function AuthPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const getForm = () => {
    if (isLogin) {
      return <LoginForm />;
    }

    return <RegistrationForm />;
  };

  useEffect(() => {
    dispatch(resetAuthError());
  }, [dispatch, isLogin]);

  return (
    <>
      <div
        className={`
            flex 
            min-h-full 
            flex-1 
            flex-col 
            justify-center 
            px-6 
            py-12 
            lg:px-8
          `}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-5xl font-black text-indigo-500 text-center">
            TODO APP
          </h1>
          <h2
            className={`
                mt-10 
                text-center 
                text-2xl/9 
                font-bold 
                tracking-tight 
              text-gray-900
              `}
          >
            {isLogin ? "Sign in to your account" : "Create new account"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Form section */}
          {getForm()}
          {/* End of form section */}

          {isLogin ? (
            <p className="mt-5 ">
              Don't have an account?
              <a
                href="#"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-3 font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Create account
              </a>
            </p>
          ) : (
            <p className="mt-5 ">
              Already have an account?
              <a
                href="#"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-3 font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </a>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AuthPage;
