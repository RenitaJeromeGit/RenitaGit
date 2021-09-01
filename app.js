// Ext.application({
// 	extend: 'Myapp10.Application',
// 	name: 'Myapp10'
// });

Ext.application({
	extend: 'Myapp10.Application',
	name: 'Myapp10',
	mainView: 'Myapp10.view.main.center.CenterView',
	launch: function() {
		var css = Ext.util.CSS.createStyleSheet();
		Ext.util.CSS.createRule(css, '.x-red', 'color:red !important;');
		Ext.util.CSS.createRule(css, '.x-green', 'color:green !important;');
		Ext.util.CSS.createRule(css, '.x-blue', 'color:blue !important;');
	 
	}
	});