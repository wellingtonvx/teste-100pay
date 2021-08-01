import  './style.scss'
import './responsive.scss'

interface CardInfoProps {
  value: number;
  text: string;
  buttonValue: string;
  message: string
  onOpenTransactionModal: () => void
  openDetailsModal: () => void
}

export function CardInfo({value, text, buttonValue, message, onOpenTransactionModal, openDetailsModal}:CardInfoProps){

  return (
    <div className="cardInfoContainer">
        <header>
           <p>{text}</p>
        </header>

        <main>
          <strong>
              {
                new Intl.NumberFormat('pt-BR', {
                style:"currency",
                currency:"BRL"
                }).format(value)
              }
          </strong>
          <button onClick={buttonValue === 'Transferir' ? onOpenTransactionModal : openDetailsModal}>
            {buttonValue}
          </button>
        </main>

        <footer>
          <span>{message}</span>
        </footer>
  </div>
  )
}