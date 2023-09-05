frappe.ui.form.on('Quotation', {
	refresh(frm) {
		if (frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Quotation', 'company', function(frm){
	naming_series_filter()
})