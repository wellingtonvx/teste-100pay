import BoletoImg from  '../../assets/icons/boleto.svg'
import AssinaturaImg from  '../../assets/icons/usd-circle.svg'
import HelpImg from '../../assets/img/help.png'

import { transactions } from '../../assets/transactions'


import './style.scss';
import './responsive.scss';


interface TransactionCardProps {
  isMobile : boolean
}

export function TransactionCard({isMobile}:TransactionCardProps){


  return (
    <div className="transactionCardContainer" >
      <span>Últimas Transações</span>

      { transactions.map( transaction => (
        <div key={transaction.id}>
          {transaction.type === 'Boleto'? (
            <img src={BoletoImg} alt="icone boleto" />
          ) : (
            <img src={AssinaturaImg} alt="icone assinatura" />
          )}

          <div>
              <span>
                {transaction.sender}
              </span> 
              <p>
                {transaction.plan}
              </p>
        </div>


        <div className="price">
          <strong>
                {
                  new Intl.NumberFormat('pt-BR', {
                  style:"currency",
                  currency:"BRL"
                  }).format(transaction.value)
                }
          </strong>
        </div>
      </div>
      ))}

     { !isMobile && <img src={HelpImg} alt="Campo de Ajuda" /> }
    </div>
  )
}