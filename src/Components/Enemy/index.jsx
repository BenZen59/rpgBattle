import axios from 'axios';
import { useEffect, useState } from 'react';
import Attack from '..//Attack';

export default function Enemy() {
  const [enemy, setEnemy] = useState([]);
  const ennemyMax = 4;
  const randomEnemy = Math.floor(Math.random() * (ennemyMax - 1 + 1)) + 1;
  console.log(randomEnemy);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/enemy`).then(({ data }) => {
      setEnemy(data);
    });
  }, []);

  return (
    <>
      {enemy
        .filter((enemies) => enemies.id === randomEnemy)
        .map((enemies) => {
          return (
            <p>
              <img src={enemies.spriteEnemy} alt='enemy' />
              <br />
              {enemies.nameEnemy}
              <br />

              <Attack
                propsPv={enemies.pvEnemy}
                propsPvMax={enemies.pvMaxEnemy}
              />
            </p>
          );
        })}
    </>
  );
}
