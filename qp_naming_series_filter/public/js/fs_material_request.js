frappe.ui.form.on('Material Request', {
	refresh(frm) {
		if (frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Material Request', 'company', function(frm){
	naming_series_filter()
})