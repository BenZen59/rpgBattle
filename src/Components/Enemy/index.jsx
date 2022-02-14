import axios from 'axios';
import { useEffect, useState } from 'react';
import Attack from '..//Attack';
import './style.css';

export default function Enemy() {
  const [enemy, setEnemy] = useState([]);
  const ennemyMax = 4;
  const randomEnemy = Math.floor(Math.random() * (ennemyMax - 1 + 1)) + 1;
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
            <div>
              <img
                src={enemies.spriteEnemy}
                className='spriteEnemy'
                alt='enemy'
              />
              <br />
              <span className='name'>{enemies.nameEnemy}</span>
              <br />

              <Attack
                propsPv={enemies.pvEnemy}
                propsPvMax={enemies.pvMaxEnemy}
              />
            </div>
          );
        })}
    </>
  );
}
