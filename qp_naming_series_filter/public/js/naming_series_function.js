
function naming_series_filter(){
    var naming_series_array = []

    var naming_series_options = [];
    
    var naming_series_field = cur_frm.meta.fields.find(field => field.fieldname == "naming_series")
    
    if(naming_series_field){

        naming_series_options = naming_series_field.options.split("\n")

        if(naming_series_options){

            frappe.db.get_list("Company", {fields:['name', 'abbr']}).then(
                companies => {

                    companies.forEach(company => {

                        naming_series_options.forEach( (option, index, naming_series_options) => {

                            var i = naming_series_options.findIndex(option);

                            var opt_com_abbr = option.split("-");
                        
                            if(opt_com_abbr[0].toUpperCase() == company.abbr.toUpperCase()){
                                
                                if(company.name == cur_frm.doc.company)
                                    naming_series_array.push(option)
                                    
                                naming_series_options.splice(i, 1)

                            }

                            if(option == ''){
                                naming_series_array.push(option)
                                naming_series_options.splice(i, 1)
                            }
                        })

                    })
                
                    naming_series_array.push.apply(naming_series_array,naming_series_options)
                
                    cur_frm.set_value('naming_series', naming_series_array[0])
                
                    set_field_options("naming_series", naming_series_array)
                }
            )
            
        }
    }
}