import { ButtonHTMLAttributes } from 'react'

import {Icon } from '../Icon'

import './style.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  selected: boolean;
  iconName: 'Dashboard' | 'Clientes' | 'PIX' | 'Cartão' | 'Boleto' | 'Assinatura' | 'Configuração' | 'Sair';
}

export function Button({iconName, title, selected, ...rest}: ButtonProps) {
  return (
    <button className="buttomMenu" type="button" {...(selected && {className:'selected buttomMenu'})}{...rest} >
      <Icon name={iconName === undefined ? 'Dashboard' : iconName} color={ selected ? '#F58B1E' : '#B8B4CC'}/>
      {title}
    </button>
  )
}