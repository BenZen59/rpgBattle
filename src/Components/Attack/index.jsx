import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import './style.css';

export default function Attack({ propsPv, propsPvMax }) {
  console.log(propsPv, propsPvMax);
  const [Pv, setPv] = useState(propsPv);
  const [PvMax, setPvMax] = useState(propsPvMax);

  useEffect(() => {
    const width = getComputedStyle(document.documentElement).getPropertyValue(
      '--progress'
    );
  });

  function message() {
    if (Pv <= 10) {
      alert('KOOOOOOOOOOOOOOOO !!!!!!!!!!!!!!!!!');
      document.documentElement.style.setProperty('--progress', `0%`);
      setPv(0);
    }
  }

  function calculHit() {
    if (Pv >= 1) {
      return Math.round(((PvMax - (PvMax - Pv)) * 100) / PvMax);
    }
    return 0;
  }

  function attackClick() {
    if (Pv > 0) {
      const D20 = Math.floor(Math.random() * (20 - 1)) + 1;
      const attack = 10;
      setPv(Pv - Math.round(D20 * attack));
      document.documentElement.style.setProperty(
        '--progress',
        `${calculHit()}%`
      );
      message();
    } else {
      message();
    }
  }

  return (
    <>
      <p className='BarreDeVie'>
        <p className='PV'>
          {Pv}/{PvMax}
        </p>
      </p>
      <button className='Attack' onClick={attackClick}>
        ATTACK !!
      </button>
    </>
  );
}

Attack.propTypes = {
  propsPv: PropTypes.number.isRequired,
  propsPvMax: PropTypes.number.isRequired,
};
