import WommanCoddingImg from '../../assets/img/womman.png'


export function Content() {
  return (
    <div className="container">
      <header>
        <div>
          <h2>SifraPag</h2>
          <p>
            Seja bem-vindo novamente. Estamos <br/>
            felizes em lhe ver :D.
          </p>
        </div>
        <img src={WommanCoddingImg} alt="Mulher no computador" />
      </header>
      <main>
      <div>
        <header>
          <p>Saldo disponível </p>
          <button>
            Trasferir
          </button>
        </header>
          <strong>
          {
            new Intl.NumberFormat('pt-BR', {
            style:"currency",
            currency:"BRL"
            }).format(685)
          }
          </strong>
      </div>
      </main>
    </div>
  )
}