frappe.ui.form.on('Delivery Note', {
	refresh(frm) {
		if (frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Delivery Note', 'company', function(frm){
	naming_series_filter()
})