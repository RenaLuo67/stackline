import React from 'react';
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';


function Table(props) {

	const sales = props.sales;
	
	const format = (value) => {
		const temp = value.toString();
		const len = temp.length;
		const first = temp.substring(0, len - 3);
		const second = temp.substring(len - 3);
		return '$' + first + ',' + second;
	}
		
	const rows = sales.map((sale) => ({
    	weekEnding: sale["weekEnding"], 
    	retailSales: format(sale["retailSales"]), 
    	wholesaleSales: format(sale["wholesaleSales"]),
    	unitsSold: sale["unitsSold"],
    	retailerMargin: format(sale["retailerMargin"])
    }));;

	const columns = [
	  { key: 'weekEnding', name: 'WEEK ENDING' },
	  { key: 'retailSales', name: 'RETAIL SALES' },
	  { key: 'wholesaleSales', name: 'WHOLESALE SALES' },
	  { key: 'unitsSold', name: 'UNITS SOLD' },
	  { key: 'retailerMargin', name: 'RETAILER MARGIN' }
	];

  	return (
    	<DataGrid
      		columns={columns}
      		rows={rows}
      		style={{height: '100%', fontSize: '65%', color: 'grey', fontWeight: '200', textAlign: 'left'}}
   		/>
  	);
}


export default Table;


