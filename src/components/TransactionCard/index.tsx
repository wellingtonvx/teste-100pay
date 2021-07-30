import BoletoImg from  '../../assets/icons/boleto.svg'
import AssinaturaImg from  '../../assets/icons/usd-circle.svg'

import './style.scss';


const transactions = [
  {
    id:1,
    type: 'Boleto',
    sender: 'Paula',
    plan: 'Plano 2',
    value: 46
  },

  {
    id:2,
    type: 'Boleto',
    sender: 'Francisco',
    plan: 'Boleto',
    value: 756
  },

  {
    id:3,
    type: 'Assinatura',
    sender: 'Francisco',
    plan: 'Plano 3',
    value: 88
  },

  {
    id:4,
    type: 'Assinatura',
    sender: 'Francisco',
    plan: 'Plano 2',
    value: 25
  },
]

export function TransactionCard(){


  return (
    <div className="transactionCardContainer">
      <span>Últimas Transações</span>

      { transactions.map( transaction => (
        <div key={transaction.id}>
          {transaction.type === 'Boleto'? (
            <img src={BoletoImg} alt="icone boleto" />
          ) : (
            <img src={AssinaturaImg} alt="icone assinatura" />
          )}

         <strong>
          {transaction.sender}
          <p>
            {transaction.plan}
          </p>
        </strong>

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
    </div>
  )
}