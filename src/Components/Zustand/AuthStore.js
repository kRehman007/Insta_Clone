import { create } from "zustand";
import { auth } from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  signup: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const userCredentails = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      set({ user: userCredentails.user });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const userCredentails = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      set({ user: userCredentails.user });
    } catch (error) {
      console.log(error);
      let errorMessage;
      if (error.code === "firebase.auth/wrong-password") {
        errorMessage = "Incorrect password, please try again";
      } else if (error.code == "firebase.auth/invalid-email") {
        errorMessage = "Enter valid email";
      } else {
        errorMessage = "Enter correct email/password";
      }
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    set({ loading: true });
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      set({ user: error.message });
    } finally {
      set({ loading: false });
    }
  },

  listenauthstatechanged: async () => {
    set({ loading: true });
    onAuthStateChanged(auth, (user) => {
      set({ user: user, loading: false });
    });
  },
}));

export default useAuthStore;
