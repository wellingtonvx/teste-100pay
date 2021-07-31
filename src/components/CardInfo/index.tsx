import  './style.scss'
import './responsive.scss'

interface CardInfoProps {
  value: number;
  text: string;
  buttonValue: string;
  message: string
}

export function CardInfo({value, text, buttonValue, message}:CardInfoProps){

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
          <button>
            {buttonValue}
          </button>
        </main>

        <footer>
          <span>{message}</span>
        </footer>
  </div>
  )
}