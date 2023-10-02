import React, { useState } from 'react';
import data from './data.json';
import styles from './style.module.css';
import Image from 'next/image';

const Display = () => {
  const [gif, setGif] = useState(null);

  const getRandomGif = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setGif(data[randomIndex]);
  };

  return (
    <div className={styles.main}>
      <button onClick={getRandomGif} className={styles.randomButton}></button>
      <p className={styles.focus}>
        Focus Determines Reality</p>
      {gif && (
        <div className={styles.imageContainer}>
          <Image src={gif.source} alt={gif.title} key={gif.title} width={500} height={500}/>
          <p className={styles.title}>{gif.title}</p>
        </div>
      )}
    </div>
  );
};

export default Display;
