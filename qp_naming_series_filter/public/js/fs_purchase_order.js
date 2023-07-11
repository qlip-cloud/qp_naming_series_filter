frappe.ui.form.on('Purchase Order', {
	refresh(frm) {
		if (frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Purchase Order', 'company', function(frm){
	naming_series_filter()
})