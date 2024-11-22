import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

interface UserData {
  uid: string;
  email: string;
  firstName: string|undefined;
  lastName: string|undefined;
  createdAt: any;
}

export const signUp = async (
  email: string,
  password: string,
  firstName: string|undefined,
  lastName: string|undefined
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: `${firstName} ${lastName}` });

    const userData: UserData = {
      uid: user.uid,
      email: user.email!,
      firstName,
      lastName,
      createdAt: serverTimestamp(),
    };

    await setDoc(doc(db, "users", user.uid), userData);
    return user;
    
  } catch (error: any) {
    console.error("Error signing up:", error.message);
    throw new Error(error.message);
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error: any) {
    console.error("Error signing in:", error.message);
    throw new Error(error.message);
  }
};