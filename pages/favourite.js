import { useEffect } from "react";
import Link from "next/link";
import Card from "../components/Card/Card";
import styles from "../styles/Home.module.css";
import useFavouritesStore from "../store/favourite.store";
import useContactStore from "../store/contact.store";

export default function Favourite() {
  const { contacts, fetchContacts } = useContactStore();
  const { favourites, addToFavourite, removeFavourite } = useFavouritesStore();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const favouriteContacts = favourites.map((fav) => ({
    id: fav,
    ...contacts.find((contact) => contact.id === fav),
  }));

  return (
    <div className={styles.container}>
      <h1>My Favourite</h1>
      <Link href="/">Go to my contacts list</Link>
      <div className={styles.contactsContainer}>
        {favouriteContacts.map((contact, i) => (
          <Card
            key={i}
            {...contact}
            isFavourite={favourites.includes(contact.id)}
            addFavourite={() => addToFavourite(contact.id)}
            removeFavourite={() => removeFavourite(contact.id)}
          />
        ))}
      </div>
    </div>
  );
}
