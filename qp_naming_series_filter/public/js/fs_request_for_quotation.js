frappe.ui.form.on('Request For Quotation', {
	refresh(frm) {
		if (frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Request For Quotation', 'company', function(frm){
	naming_series_filter()
})