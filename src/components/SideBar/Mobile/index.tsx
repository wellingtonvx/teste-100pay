import { useState } from 'react'
import Logo2Img from '../../../assets/img/logo-sifra-pag-1.png'
import { Button } from '../../Button'
import { ToogleMenu } from './ToogleMenu'

import './style.scss'
import { motion } from 'framer-motion'

interface OptionProps {
  id: number;
  name: 'Dashboard' | 'Clientes' | 'PIX' | 'Cartão' | 'Boleto' | 'Assinatura' | 'Configuração' | 'Sair';
}

export function SideBarMobile(){

  const [optionSelected, setOptionSelected] = useState(1)
  const [isOpen, setIsopen] = useState(false);
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
    <nav className="sideBarMobile">
      <ToogleMenu isOpen={isOpen} toogle={() => setIsopen(!isOpen)}/>
      {isOpen && (
        
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                x: -100,
              },
              visible: {
                scale: 1,
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.3,
                },
              },
            }}
          >


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
                    
        </motion.div>
        
      )}
    </nav>
  )
}
