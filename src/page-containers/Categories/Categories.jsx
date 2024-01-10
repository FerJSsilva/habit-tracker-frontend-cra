import React from 'react';
import Container from '../../components/block-components/NES/Container/Container';
import { Link } from 'wouter';

import { MdSportsSoccer } from 'react-icons/md';
import { TbBulb } from 'react-icons/tb';
import { BsFillSuitHeartFill, BsYinYang } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';

function Home() {
  return (
    <Container
      title={'Categories'}
      centered
    >
      <div>
        <Link href="/habits">
          <label
            className="nes-btn"
            style={{ width: '100%' }}
          >
            <h2>
              <MdSportsSoccer size={48} /> Physical
            </h2>
            <p>
              Take care of your body to maintain health now and in the future.
            </p>
          </label>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/habits">
          <label
            className="nes-btn"
            style={{ width: '100%' }}
          >
            <h2>
              <TbBulb size={48} /> Intellectual
            </h2>
            <p>
              Develop your brain by valuing mental challenges and curiosity.
            </p>
          </label>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/habits">
          <label
            className="nes-btn"
            style={{ width: '100%' }}
          >
            <h2>
              <BsFillSuitHeartFill size={48} /> Emotional
            </h2>
            <p>
              Recognize and respect your feelings, seeking balance. Cultivate
              empathy and self-awareness.
            </p>
          </label>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/habits">
          <label
            className="nes-btn"
            style={{ width: '100%' }}
          >
            <h2>
              <FaUsers size={48} /> Social
            </h2>
            <p>
              Foster healthy relationships and a strong connection with your
              community.
            </p>
          </label>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/habits">
          <label
            className="nes-btn"
            style={{ width: '100%' }}
          >
            <h2>
              <BsYinYang size={48} /> Spiritual
            </h2>
            <p>
              Find a sense of purpose and meaning in existence. Seek inner
              peace, ethical and moral values.
            </p>
          </label>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
