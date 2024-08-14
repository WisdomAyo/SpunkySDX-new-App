'use client'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"

const options = {
    chart: {
        type: 'pie',
        plotBackgroundColor: null,
        backgroundColor: null,
        width: 490,
        height: 490,
    },
    title: {
        text: '',
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    credits: {
        enabled: false
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
        pie: {
            states: {
                inactive: {
                    opacity: 0.4
                }
            },
            borderWidth: 0,
            allowPointSelect: true,
            cursor: 'pointer', 
            dataLabels: {
                enabled: true,
                distance: -25,
                format: '',
                style: {
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#fff',
                    textOutline: 'none'
                },
                background: {
                    enabled: false,

                },
                dropShadow: {
                    enabled: false,
                }
            }, 
            showInLegend: false,
        },
    }, 
    series: [{
        type: 'pie',
        innerSize: '60%',
        data: [{
            name: 'Airdrop and Mining',
            y: 6.1,
            color: '#AFC5FF',
          }, {
            name: 'Staking Rewards and ecosystem development',
            color: '#FDEBB3',
            y: 30.3,
          },  {
            name: 'Team and Advisors',
            color: '#ACF2C4',
            y: 6.1,
          }, {
            name: 'Liquidity',
            color: '#CDBDF3',
            y: 30.3,
          }, {
            name: 'Buyback and Token Burn',
            color: '#E89F8E',
            y: 10.2,
          },  {
            name: 'Investors',
            y: 4.1,
            color: '#6574EB',
          }, {
            name: 'Presale, IDO and public sales',
            y: 15.40,
            color: '#ACE5F2',
          }]
    }]
}

export default function Chart1() {
    return (
        <>
            <PieChart highcharts={Highcharts} options={options} id="container" />
        </>
    )
}
