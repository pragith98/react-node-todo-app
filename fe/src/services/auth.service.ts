import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
} from "firebase/auth";
import type { 
  User,
  UserToCreate, 
  UserToLogin 
} from "../types/user.type";
import { auth } from "../firebase";

export const createUserAccount = async (
  user: UserToCreate
): Promise<User> => {
  const { email, password } = user;
  const credentials = await createUserWithEmailAndPassword(auth, email, password);
  return { 
    email: credentials.user.email ?? '', 
    uid: credentials.user.uid 
  };
}

export const loginToUserAccount = async (
  user: UserToLogin
): Promise<User> => {
  const { email, password } = user;
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  return { 
    email: credentials.user.email ?? '', 
    uid: credentials.user.uid 
  };
}