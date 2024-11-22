import { auth } from "@/lib/firebase/firebase";
import { User } from "firebase/auth";

/**
 * Get the current signed-in user.
 * @returns The current user object or null if no user is signed in.
 */
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};
