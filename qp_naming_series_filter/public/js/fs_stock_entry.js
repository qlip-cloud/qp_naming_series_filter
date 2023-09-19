frappe.ui.form.on('Stock Entry', {
	refresh(frm) {
		if (frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Stock Entry', 'company', function(frm){
	naming_series_filter()
})