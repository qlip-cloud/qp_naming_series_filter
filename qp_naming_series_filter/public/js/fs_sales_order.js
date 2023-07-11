frappe.ui.form.on('Sales Order', {
	refresh(frm) {
		if (frm.is_new()) {
			set_field_options("naming_series", [])
			naming_series_filter()
        }
	}
})

frappe.ui.form.on('Sales Order', 'company', function(frm){
	set_field_options("naming_series", [])
	naming_series_filter()
})