frappe.ui.form.on('Sales Invoice', {
	refresh(frm) {
		if (!frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Sales Invoice', 'company', function(frm){
	naming_series_filter()
})