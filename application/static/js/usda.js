var url = '/usda_data'

function dataCheck(data){
	var data_type = typeof(data)
	var data_length = typeof(data_length)

}

d3.request(url, function(data) {
	dataCheck(data)
})