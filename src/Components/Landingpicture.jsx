import styles from "./styles/Picture.module.css"

import background from "../Assets/TEST.jpg"

const Picture = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source  srcSet={background} />
        <img  src={background} alt="background" />
      </picture>
      <h1 className={styles.header}>HCI General Contractors</h1>
      <h3 className= {styles.subheader}>Let us worry about the construction for you</h3>
    </article>
  );
};

export default Picture;