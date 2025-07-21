import { useDispatch } from "react-redux";
import Button from "./Button";
import type { AppDispatch } from "../store/store";
import { logoutUser } from "../store/auth.slice";

function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const onClickLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="bg-gray-800 py-2 flex flex-row justify-between px-10">
      <h1 className="text-3xl text-white font-extrabold text-center">
        TODO APP
      </h1>

      <div className="w-30" >
        <Button variant="outlined" onClick={onClickLogout} >Log out</Button>
      </div>
    </nav>
  );
}

export default Header;
