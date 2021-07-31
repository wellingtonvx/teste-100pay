import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import './style.scss';
import './responsive.scss';

const options = { 
  chart: {
    id:"Vendas"
  },
  dataLabels: {
    enabled: false,
    
  },
  colors: ["#F58B1E"],
  fill: {
    colors: ['#F58B1E', '#ffc400', '#e62a2a']
  },
  xaxis: {
    categories: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL','AGO', 'SET', 'OUT', 'NOV', 'DEZ']
  },
}

const series = [
  {
    name: "Vendas por Ano/2020",
    data: [50,70,100,80,45,100,120,100,200,300,420,390],
  }

]


export function Graph(){

  const [isSelected, setIsSelected] = useState(true)
  const [buttonName, setButtonName] = useState('');

  function handleClickButton(name:string){  
    setIsSelected(true);
    setButtonName(name);
  } 

  return (
    <div className="graphContainer">
      <div className="graphInputs">
        <span>Filtrar por:</span>
        <input type="date" value="2021-07-12"/>

        <button 
          className={isSelected && buttonName === 'ano' ? 'selected': ''}
          onClick={ () => handleClickButton('ano')}
        >
          Ano
        </button>

        <button 
          className={isSelected && buttonName === 'mes' ? 'selected': ''}
          onClick={ () => handleClickButton('mes')}
        >
          Mês
        </button>

        <button 
          className={isSelected && buttonName === 'semana' ? 'selected': ''}
          onClick={ () => handleClickButton('semana')}
        >
          Semana
        </button>
      </div>
      <ReactApexChart className="graphChart" options={options} series={series} type="area" height={220} />
    </div>
  )
}

