// Ext.define('Myapp10.view.main.center.CenterView', {
// 	extend: 'Ext.Container',
// 	xtype: 'centerview',
// 	cls: 'centerview',
// 	layout: 'card'
// });


Ext.define('Myapp10.view.main.center.CenterView', {
	extend: 'Ext.grid.Grid',
	title: 'Reykjavik Flight Arrivals',
	itemConfig: {
		viewModel: true
	},
	columns: [{
		text: 'Date',
		// xtype: 'datecolumn',
		// dataIndex: 'date',
		cell: {
			bind: '{record.date:date("F j")}'
		}
	}, {
		text: 'Airline',
		width: 120,
		cell: {
			bind: '{record.airline}'
		}
	}, {
		text: 'From',
		cell: {
			bind: '{record.to}'
		},
		width: 160
	}, {
		text: 'Scheduled',
		cell: {
			bind: '{record.plannedDeparture}'
		},
		align: 'center'
	}],
	 
	store: {
		type: 'store',
		autoLoad: true,
		fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
		proxy: {
			type: 'ajax',
			url: 'departures.json',
			reader: {rootProperty: 'results'}
		}
	}
	});
	