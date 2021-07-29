import { useState } from 'react'
import LogoImg from '../../assets/img/logo.png'
import Logo2Img from '../../assets/img/logo-sifra-pag-1.png'
import { Button } from '../Button'
import './style.scss'


interface OptionProps {
  id: number;
  name: 'Dashboard' | 'Clientes' | 'PIX' | 'Cartão' | 'Boleto' | 'Assinatura' | 'Configuração' | 'Sair';
}

export function SideBar(){

  const [optionSelected, setOptionSelected] = useState(1)
  const [options, ] = useState<OptionProps[]>([
    {
      "id": 1,
      "name": "Dashboard",
    },
    {
      "id": 2,
      "name": "Clientes",
    },
    {
      "id": 3,
      "name": "PIX",
    },
    {
      "id": 4,
      "name": "Cartão",
    },
    {
      "id": 5,
      "name": "Boleto",
    },
    {
      "id": 6,
      "name": "Assinatura",
    },
    {
      "id": 7,
      "name": "Configuração",
    },
    {
      "id": 8,
      "name": "Sair",
    }
  ])


  function handleClickButton(id:number){
    setOptionSelected(id)
  }

  return (
    <nav className="sidebar">
      <img src={LogoImg} alt="Logo 100Pay" />

      <div className="buttons-container">
        {options.map( option => (
          <Button 
            key={option.id}
            title={option.name}
            iconName={option.name}
            onClick={() => handleClickButton(option.id)}
            selected={optionSelected === option.id}
          />
        ))}
      </div>

      <footer>
        <div>
          <img src={Logo2Img} alt="Logo Sifrapag" />
        </div>
        <span>
          SifraPag
          <p>Serviços financeiros</p>
        </span>
      </footer>
    </nav>
  )
}

