import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContact() {
      const response = await fetch("/api/contact");
      const data = await response.json();
      console.log(data);
      setContacts(data.data);
    }
    fetchContact();
  }, []);

  return (
    <div className={styles.container}>
      {contacts.map((contact, i) => (
        <Card {...contact} key={i} />
      ))}
    </div>
  );
}
