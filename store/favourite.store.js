import create from "zustand";
import { persist } from "zustand/middleware";

const useFavouritesStore = create(
  persist(
    (set, get) => ({
      favourites: [],
      addToFavourite: (id) => {
        const oldFavourites = [...get().favourites];
        oldFavourites.push(id);
        set({ favourites: oldFavourites });
      },
      removeFavourite: (id) => {
        let oldFavourites = [...get().favourites];
        oldFavourites = oldFavourites.filter((fav) => fav !== id);
        set({ favourites: oldFavourites });
      },
    }),
    {
      name: "favourite-storage",
    }
  )
);

export default useFavouritesStore;
