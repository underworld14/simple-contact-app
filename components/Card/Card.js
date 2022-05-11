import styles from "./Card.module.css";

export default function Card({ name, phone_number, address, isFavourite, addFavourite, removeFavourite }) {
  return (
    <div className={styles.card}>
      <div className={styles.nama}>
        <h2>{name}</h2>
      </div>
      <div className={styles.phoneNumber}>
        <p>{phone_number}</p>
      </div>
      <div className={styles.adress}>
        <h4>{address}</h4>
      </div>
      <button onClick={isFavourite ? removeFavourite : addFavourite} className={styles.btnCustom}>
        {isFavourite ? "❤️" : "🖤"}
      </button>
    </div>
  );
}
