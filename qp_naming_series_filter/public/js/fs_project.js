frappe.ui.form.on('Project', {
	refresh(frm) {
		if (frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Project', 'company', function(frm){
	naming_series_filter()
})