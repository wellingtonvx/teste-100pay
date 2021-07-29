import WommanCoddingImg from '../../assets/img/womman.png'

import './style.scss'

export function Content() {
  return (
    <div className="container">
      <header>

        <div>
          <h2>SifraPag</h2>
          <p>
            Seja bem-vindo novamente. Estamos<br/>
            felizes em lhe ver :D.
          </p>
        </div>

        <img src={WommanCoddingImg} alt="Mulher no computador" />

      </header>

      <main className="content">
        <section>
          <div>
            <header>
              <p>Saldo disponível </p>
            </header>
            <main>
              <strong>
              {
                new Intl.NumberFormat('pt-BR', {
                style:"currency",
                currency:"BRL"
                }).format(685)
              }
              </strong>
              <button>
                Trasferir
              </button>
            </main>
            <footer>
              <span>*Valor sujeito a mudança até o final do dia</span>
            </footer>
          </div>

          <div>
            <header>
              <p>Saldo A receber </p>
            </header>
            <main>
              <strong>
              {
                new Intl.NumberFormat('pt-BR', {
                style:"currency",
                currency:"BRL"
                }).format(20657)
              }
              </strong>

              <button>
                Visualizar detalhes
              </button>
            </main>
            <footer>
              <span>*Lançamentos previstos para entrar na sua conta</span>
            </footer>

          </div>
        </section>
        <section>
          
        </section>
      
      </main>

    </div>
  )
}