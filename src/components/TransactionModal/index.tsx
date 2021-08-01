import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import toast, {Toaster} from 'react-hot-toast';

import CloseImg from '../../assets/icons/Close.svg'

import './style.scss';

interface TransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose} : TransactionModalProps){


  const [title, setTitle] =useState('');
  const [amount, setAmount] =useState(0);
  const [category, setCategory] =useState('');

  async function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault();

    if(title.trim() === "" || amount === 0 || category.trim() === ""){
      toast.error('os campos não podem estar vazios');
      return;
    }


    
    setTitle('');
    setAmount(0);
    setCategory('');
    
    onRequestClose();
    
    toast.success('Adicionado com sucesso')

  }

  return (
  <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={CloseImg} alt="Fechar Modal" />
      </button>

      <form className="formContainer" onSubmit={handleCreateNewTransaction}>

        <h2>Fazer nova Transferencia</h2>

        <input
          placeholder= "Título" 
          value={title}
          onChange={ event => setTitle(event.target.value)}
       />

        <input
          type="number"
          placeholder= "Valor"
          onChange={ event => setAmount(Number(event.target.value))}
       />
       <Toaster 
          position="top-right"
       />
       
        <input
          placeholder= "Categoria"
          value={category}
          onChange={ event => setCategory(event.target.value)}
       />

       <button type="submit">
         Cadastrar
       </button>

      </form>

  </Modal>
  )
}