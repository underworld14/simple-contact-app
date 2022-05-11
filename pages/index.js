import { useEffect } from "react";
import Link from "next/link";
import Card from "../components/Card/Card";
import styles from "../styles/Home.module.css";
import useFavouritesStore from "../store/favourite.store";
import useContactStore from "../store/contact.store";

export default function Home() {
  const { contacts, fetchContacts } = useContactStore();
  const { favourites, addToFavourite, removeFavourite } = useFavouritesStore();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className={styles.container}>
      <h1>My Contact</h1>
      <Link href="/favourite">Go to my Fav</Link>
      <div className={styles.contactsContainer}>
        {contacts.map((contact, i) => (
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
