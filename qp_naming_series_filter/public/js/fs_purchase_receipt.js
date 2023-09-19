frappe.ui.form.on('Purchase Receipt', {
	refresh(frm) {
		if (frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Purchase Receipt', 'company', function(frm){
	naming_series_filter()
})