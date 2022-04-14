import styles from "./styles/Picture.module.css"

import background from "../Assets/TEST.jpg"

const Picture = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source  srcSet={background} />
        <img  src={background} alt="background" />
      </picture>
      <h1 className={styles.header}>React Is Awesome</h1>
    </article>
  );
};

export default Picture;