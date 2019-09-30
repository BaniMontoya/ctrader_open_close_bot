// abre orden en base a signal
function ejecuta() {
	direccion = $('#container > div.mainContent.linear_layout.horizontal.horizontal-flex.layout_item > div.activeSymbolPanelRoot.layout_item > div > div > div > div  > div > div > div  > div > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(1) > div._ag._by > div:nth-child(2)');
	direccion.click();
	comprar = $('body > div:nth-child(9) > div:nth-child(3) > div > div.k__container > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div');
	comprar.click();
	cerrar = $('body > div:nth-child(10) > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div.u__description-block');
	cerrar.click();
}
setInterval(function () {
	ejecuta();
}, 15000);
// cierra posiciones con beneficio
setInterval(function () {
	if ($('#container > div.mainContent.linear_layout.horizontal.horizontal-flex.layout_item > div.linear_layout.vertical.layout_item > div.tradeWatchRoot.layout_item > div > div.frame > div.tradingView.positionsView > div.toolbar > div.close_all_positions.custom_cursor.formControl.b-form-control.ct-button.buttonDropDown.separated.positionsCloseButton.notActive').hasClass('notActive')) {} else {
		$('#container > div.mainContent.linear_layout.horizontal.horizontal-flex.layout_item > div.linear_layout.vertical.layout_item > div.tradeWatchRoot.layout_item > div > div.frame > div.tradingView.positionsView > div.toolbar > div.close_all_positions.custom_cursor.formControl.b-form-control.ct-button.buttonDropDown.separated.positionsCloseButton').click();
	}
}, 5000);
