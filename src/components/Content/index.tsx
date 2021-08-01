import {Graph} from '../Graph'
import { CardInfo } from '../CardInfo'
import { TransactionCard } from '../TransactionCard'

import WommanCoddingImg from '../../assets/img/womman.png'
import LogoImg from '../../assets/img/logo.png'

import './style.scss'
import './responsive.scss'

interface ContentProps {
  isMobile : boolean,
  onOpenTransactionModal : () => void
  isOpen: boolean
  isDetailsModalOpen: boolean
  openDetailsModal: () => void
}

export function Content({isMobile, onOpenTransactionModal, isOpen, 
                        isDetailsModalOpen, openDetailsModal}:ContentProps){

  return (
      <div className={isMobile ? "contentContainerMobile" : "contentContainer"}>
        {isMobile ? (
           <>
                <header>
                  <img src={LogoImg} alt="Logo 100pay" />
                </header>

                 <section>
                    <div>
                      <h2>SifraPag</h2>
                      <p>
                        Seja bem-vindo novamente. Estamos<br/>
                        felizes em lhe ver :D.
                      </p>
                    </div>

                    <img src={WommanCoddingImg} alt="Mulher no computador" />

                  </section>

                  <main className="contentMobile">
                      
                    <section>

                      <div>
                        <CardInfo
                          value={685}
                          buttonValue="Transferir"
                          text="Saldo Disponível"
                          message="*Valor sujeito a mudanças até o final do dia"
                          onOpenTransactionModal={onOpenTransactionModal}
                          openDetailsModal={openDetailsModal}
                        />

                        <CardInfo 
                          value={202657}
                          buttonValue="Visualizar detalhes"
                          text="Saldo a receber - Abril"
                          message="*Lançamentos previsto a entrar na sua conta"
                          onOpenTransactionModal={onOpenTransactionModal}
                          openDetailsModal={openDetailsModal}
                        />
                      </div>
                    <TransactionCard isMobile={isMobile}/>

                    </section>


                    <Graph isOpen={isOpen} isDetailsModalOpen={isDetailsModalOpen}/>
                  </main>
              
          </> 
    ) : (
          <>
                  <div>
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
                              onOpenTransactionModal={onOpenTransactionModal}
                              openDetailsModal={openDetailsModal}
                            />

                            <CardInfo 
                              value={202657}
                              buttonValue="Visualizar detalhes"
                              text="Saldo a receber - Abril"
                              message="*Lançamentos previsto a entrar na sua conta"
                              onOpenTransactionModal={onOpenTransactionModal}
                              openDetailsModal={openDetailsModal}
                            />
                          </section>
                          <Graph isOpen={isOpen} isDetailsModalOpen={isDetailsModalOpen}/>
                  
                    </main>
                  </div>
                  <TransactionCard isMobile={isMobile}/>
              </>)
          }
  </div>
  )
}

