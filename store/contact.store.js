import create from "zustand";

const useContactStore = create((set, get) => ({
  contacts: [],
  fetchContacts: async () => {
    const response = await fetch("/api/contact");
    const data = await response.json();
    set({ contacts: data.data });
  },
}));

export default useContactStore;
