import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function LoginPage() {
  const navigate = useNavigate();

  const submit = () => {
    navigate("/");
  };

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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Form section */}
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
                  id="email"
                  name="email"
                  type="email"
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
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className={inputFieldClasses}
                />
              </div>
            </div>

            <Button variant="primary" onClick={submit}>
              Sign in
            </Button>
          </form>
          {/* End of form section */}

          <div className={dividerStyle}>Or continue with</div>

          <Button variant="outlined" onClick={submit}>
            <img width={20} src="icons/google-filled.svg" className="mr-4" />
            Google
          </Button>
        </div>
      </div>
    </>
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

const dividerStyle = `
  pt-9
  pb-6
  flex 
  items-center 
  text-sm
  font-semibold
  text-gray-600 
  before:flex-1 
  before:border-t 
  before:border-gray-300 
  before:me-6 
  after:flex-1 
  after:border-t 
  after:border-gray-300 
  after:ms-6 
`;

export default LoginPage;
