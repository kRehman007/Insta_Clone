import { create } from "zustand";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../Firebase/Firebase";
export const useDataBase = create((set) => ({
  userData: null,

  fetchData: async (cname, userID) => {
    const ref = doc(firestore, cname, userID);
    const snapshot = await getDoc(ref);
    console.log(snapshot.data());
    set({ userData: snapshot.data() });
  },
}));
