import React, { useEffect, useState } from 'react';
import './Main.scss';
import headLine from '../../../images/line.svg';
import Article from '../Article/Article';

export default function Main() {
  const [navState, setNavState] = useState({ current: 'true', due: 'false', boxOffice: 'false' });

  useEffect(() => {
    handleNavState('current');
  }, []);

  const handleNavState = (state) => {
    setNavState({ current: state === 'current', due: state === 'due', boxOffice: state === 'boxOffice' });
    console.log(navState);
  };

  return (
    <main>
      <header className='mainHeader'>
        <h1 className='mainTitle'>정글 시네마 영화 목록</h1>
        <img src={headLine} alt='headLine' />
      </header>
      <nav>
        <ul>
          <li>
            <h2>
              <button
                className={`navTitle ${navState.current ? 'true' : 'false'}`}
                onClick={() => {
                  handleNavState('current');
                }}
              >
                현재상영영화
              </button>
            </h2>
          </li>
          <li>
            <h2>
              <button
                className={`navTitle ${navState.due ? 'true' : 'false'}`}
                onClick={() => {
                  handleNavState('due');
                }}
              >
                개봉예정영화
              </button>
            </h2>
          </li>
          <li>
            <h2>
              <button
                className={`navTitle ${navState.boxOffice ? 'true' : 'false'}`}
                onClick={() => {
                  handleNavState('boxOffice');
                }}
              >
                박스오피스
              </button>
            </h2>
          </li>
        </ul>
      </nav>
      <Article />
    </main>
  );
}
