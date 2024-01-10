import React from 'react';
import dayjs from 'dayjs';
import Container from '../../components/block-components/NES/Container/Container';

function getWeekOfMonth() {
  const hoje = dayjs(); // Pega a data de hoje
  const primeiroDiaDoMes = hoje.startOf('month'); // Pega o primeiro dia do mês
  const diferencaEmDias = hoje.diff(primeiroDiaDoMes, 'day'); // Calcula a diferença em dias

  const semanaDoMes = Math.ceil((diferencaEmDias + 1) / 7); // Calcula a semana do mês

  return semanaDoMes;
}

function Home() {
  const currentDate = dayjs();
  const currentMonth = dayjs().format('MMMM');

  return (
    <div>
      <Container
        title={`${
          currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)
        } - Semana ${getWeekOfMonth(currentDate)}/4`}
        centered
      >
        <div className="nes-table-responsive">
          <table className="nes-table is-centered s">
            <thead>
              <tr>
                <th></th>
                <th>Caminhar</th>
                <th>Beber Água</th>
                <th>Ler</th>
                <th>Meditar</th>
                <th>Cozinhar</th>
                <th>Lavar o Rosto</th>
                <th>Pisar na Terra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dom</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
              <tr>
                <td>Seg</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
              <tr>
                <td>Ter</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
              <tr>
                <td>Qua</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
              <tr>
                <td>Qui</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <td>Sex</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
              <tr>
                <td>Sab</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
      <br />
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            className="nes-btn is-primary"
            style={{ width: '45%' }}
          >
            {'<<'}
          </button>
          <button
            className="nes-btn is-primary"
            style={{ width: '45%' }}
          >
            {'>>'}
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Home;
