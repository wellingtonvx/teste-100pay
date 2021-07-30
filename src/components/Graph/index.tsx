import ReactApexChart from 'react-apexcharts';

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


  return (
    <div>
      <div>
        <span>Filtrar por:</span>
        <input type="date" />
        <button>Ano</button>
        <button>Mês</button>
        <button>Semana</button>
      </div>
      <ReactApexChart options={options} series={series} type="area" height={350} width={'100%'} />
    </div>
  )
}

