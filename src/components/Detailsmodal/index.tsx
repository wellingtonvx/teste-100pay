import Modal from 'react-modal';

import BoletoImg from  '../../assets/icons/boleto.svg'
import AssinaturaImg from  '../../assets/icons/usd-circle.svg'
import CloseImg from '../../assets/icons/Close.svg'

import { transactions } from  '../../assets/transactions'

import './style.scss';

interface TDetailsmodalProps {
  isDetailsModalOpen: boolean,
  onRequestClose: () => void;
}

export function Detailsmodal({isDetailsModalOpen, onRequestClose} : TDetailsmodalProps){


  return (
  <Modal
      isOpen={isDetailsModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={CloseImg} alt="Fechar Modal" />
      </button>

      <div className="detailsContainer" >

        <h2>Detalhes das Transferencia</h2>
        {transactions.map( transaction => (
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
       
      </div>

  </Modal>
  )
}