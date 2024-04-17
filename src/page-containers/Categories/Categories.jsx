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
      title={'Categorias'}
      centered
    >
      <div>
        <Link href="/habits/physical">
          <label
            className="nes-btn"
            style={{ width: '100%' }}
          >
            <h2>
              <MdSportsSoccer size={48} /> Físico
            </h2>
            <p>Cuide do seu corpo para manter a saúde agora e no futuro.</p>
          </label>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/habits/intellectual">
          <label
            className="nes-btn"
            style={{ width: '100%' }}
          >
            <h2>
              <TbBulb size={48} /> Intelectual
            </h2>
            <p>
              Desenvolva seu cérebro valorizando desafios mentais e curiosidade.
            </p>
          </label>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/habits/emotional">
          <label
            className="nes-btn"
            style={{ width: '100%' }}
          >
            <h2>
              <BsFillSuitHeartFill size={48} /> Emocional
            </h2>
            <p>
              Reconheça e respeite seus sentimentos. Cultive empatia e
              autoconhecimento.
            </p>
          </label>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/habits/social">
          <label
            className="nes-btn"
            style={{ width: '100%' }}
          >
            <h2>
              <FaUsers size={48} /> Social
            </h2>
            <p>
              Busque relacionamentos saudáveis e uma forte conexão com sua
              comunidade.
            </p>
          </label>
        </Link>
      </div>
      <br />
      <div>
        <Link href="/habits/spiritual">
          <label
            className="nes-btn"
            style={{ width: '100%' }}
          >
            <h2>
              <BsYinYang size={48} /> Espiritual
            </h2>
            <p>
              Encontre um sentido de propósito e significado na existência.
              Valores éticos e morais.
            </p>
          </label>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
