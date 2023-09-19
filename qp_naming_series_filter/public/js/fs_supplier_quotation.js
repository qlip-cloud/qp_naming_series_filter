frappe.ui.form.on('Supplier Quotation', {
	refresh(frm) {
		if (frm.is_new()) {
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Supplier Quotation', 'company', function(frm){
	naming_series_filter()
})