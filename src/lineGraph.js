import React,{Component} from 'react'
import ReactEcharts from 'echarts-for-react'


class LineGraph extends Component {

    getOption = () => { 
        const sales = this.props.sales;
        const times = sales.map((sale) => (sale["weekEnding"]));
        const retailSales = sales.map((sale) => (sale["retailSales"]));
        const wholesaleSales = sales.map((sale) => (sale["wholesaleSales"]));
        const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        let option = {
            title: {
                show: true,
                text: 'Retail Sales',
                left: '1%',
                top: '3%',
                textStyle: {
                    color: 'rgb(106,109,121)',
                    fontWeight: 'normal',
                    fontSize: 16
                }
            },
            grid: {
                left: '2%',
                width: '96%',
                bottom: '12%'
            },
            xAxis: {
                type: 'category',
                data: times,
                axisLabel: {
                    formatter: function(value) {
                        const i = parseInt(value.substring(5, 7));
                        return month[i - 1];
                    },
                    interval: function(index, value) {
                        if (index === 0 || times[index].substring(5, 7) !== times[index - 1].substring(5, 7)) {
                            return true;
                        }
                        return false;
                    },
                    padding: [10, 4, 0, 0],
                    textStyle: {
                        color: 'rgb(204,205,211)',
                        fontSize: 12
                    }
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: 'rgb(243,244,248)'
                    }
                },
                axisTick: {
                    show: false,
                },
            },
            yAxis: {
                show: false,
                type: 'value',
                boundaryGap: ['80%', '80%']
            },
            series: [
                {
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    lineStyle: {
                        color: 'rgb(96,165,239)',
                        width: 3
                    },
                    data: retailSales
                },
                {
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    lineStyle: {
                        color: 'rgb(158,167,189)',
                        width: 3
                    },
                    data: wholesaleSales
                }
            ]
        };
        return option;
    }

    render() {
        return (
            <ReactEcharts option={this.getOption()} style={{height: '100%'}}/>
        )
    }
}


export default LineGraph;

