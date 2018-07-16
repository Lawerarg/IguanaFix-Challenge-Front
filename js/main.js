//Create Products
$.ajax({
  url: "https://private-70cb45-aobara.apiary-mock.com/related-product/list",
})
  .done(function( data ) {
  			
	        var html = '';
	        $.each(data, function(key, value){
	            html += '<div class="col-sm-4 "><div class="related-item">';
	            html += '<a href="#"><img class="img-responsive" src="'+value.pictureUrl+'"></a>';
				html += '<div class="wrapper">';
				html += '<h5>'+value.title+'</h5>';
				html += '<span class="price"><i class="fas fa-credit-card"></i> desde $'+(value.fromPrice/10000).toFixed(3)+'</span>';
	            html += '<p>'+value.description+':</p>';
	            html += '<div class="text-right"><a href="#" class="btn btn-sm pink">Contratar</a></div></div><!-- Wrapper --></div><!-- Item --></div><!-- Col-->';
	        });
	    $('.related-products .related .row').html(html);
  });

// List
$.ajax({
  url: "https://private-70cb45-aobara.apiary-mock.com/product/list",
})
  .done(function( data ) {
	        var select = '';
	        $.each(data, function(key, value){
	            select += '<option name="" data-value="'+value.unitPriceInCents+'" data-min="'+value.minQuantity+'">'+value.description+'</option>';
	        });
	    $('.sel-prod').html(select);
  });
 // Calculate price
var price = '';
 $( ".sel-prod" ).bind().change(function() {
 	console.log(this);
 		var price = $('.sel-prod option:selected').attr("data-value");
 		var quantity_selected = $('.sel-prod option:selected').attr("data-min");
 		var price = price / 10000;
 		
 		
 		var price =  price.toFixed(3);
 		$('#price').html('$' + price+'');
 });
