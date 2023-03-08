frappe.ui.form.on('Sales Order', {
	refresh(frm) {
		if (!frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Sales Order', 'company', function(frm){
	naming_series_filter()
})