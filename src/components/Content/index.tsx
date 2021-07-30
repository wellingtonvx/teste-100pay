import {Graph} from '../Graph'
import WommanCoddingImg from '../../assets/img/womman.png'

import './style.scss'
import { CardInfo } from '../CardInfo'

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
          <CardInfo
            value={685}
            buttonValue="Transferir"
            text="Saldo Disponível"
            message="*Valor sujeito a mudanças até o final do dia"
          />

          <CardInfo 
            value={202657}
            buttonValue="Visualizar detalhes"
            text="Saldo a receber - Abril"
            message="*Lançamentos previsto a entrar na sua conta"
          />
        </section>
       
        <Graph />

      </main>
     
    </div>
  )
}
