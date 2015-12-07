function simsearch(subcat)
    {
    	document.getElementById("search_bar").value=subcat;
    	document.getElementById("searchform").submit();
    	//alert(subcat);
    }
function updatefilter()
    {
       	var new_filter_val='';
  		if(document.getElementById("TierA").checked)
  		{new_filter_val='a';}
  		if(document.getElementById("TierB").checked)
  		{new_filter_val=new_filter_val+'b';}
  		if(document.getElementById("TierC").checked)
  		{new_filter_val=new_filter_val+'c';}
  		if(document.getElementById("TierD").checked)
  		{new_filter_val=new_filter_val+'d';}
  		if(document.getElementById("TierE").checked)
  		{new_filter_val=new_filter_val+'e';}
  		location.href=baseurl+'catalog/execute_search/'+sort_by+'/'+sort_order+'/'+new_filter_val;
  	}
function goBack()
	{
		window.history.back();
	}
function no_bal()
	{
		alert("Sorry, your order could not be placed. Please increase your virtual wallet balance.");
	}
function updateImage(id)
    {
    	var src=document.getElementById(id).src;
    	document.getElementById("largeimg").src=src ;
    }
$(document).ready(function() {	
	$(':text').click(function() {
		current_input_val=$(this).val();
		$(this).select();
	}).focusout(function(){
		if ($(this).val()==''){
			$(this).val(current_input_val);
		}			
	});
	
	$(':password').focusin(function() {
		if ($(this).attr('placeholder') !==undefined){
			$(this).removeAttr('placeholder');
		}
	});
	
	$(':password.password').focusout(function(){
		$(this).attr('placeholder','Password');
	});
	
	$(':password.password_confirm').focusout(function(){
		$(this).attr('placeholder','Confirm Password');
	});
	//do not delete the foll lines!	
	//var height_of_form = document.getElementById('login_form').clientHeight;
	//alert(height_of_form);
	//document.getElementById('adbanner_on_loginpage').style.height=height_of_form+'px';

	
	if(document.getElementById("search_bar"))
	{
		document.getElementById("search_submit").style.background = "#C9CBCD";
	 	document.getElementById("search_submit").disabled=true;
		$( "#search_bar" ).keyup(checkvalidsq);
		$( "#search_bar" ).focusin(checkvalidsq);
		function checkvalidsq() {
         var sq=$(this).val();
         sq=sq.toString();         
         sq=sq.trim();
         //var empty=/\S/.test(sq);
         //alert(sq+"ded");
		 if(sq=="Search"||sq=="")
		 {
	 	  //alert("what");
	 	  document.getElementById("search_submit").style.background = "#C9CBCD";
	 	  document.getElementById("search_submit").disabled=true;
    	 }
    	 else
    	 {
    	 //	alert("hua!");
    	  document.getElementById("search_submit").style.background = "white";
    	  //document.getElementById("search_submit").style.background = /background: #0070b8;	cursor: pointer;
    	  document.getElementById("search_submit").disabled=false;
    	 }
        }
        
        
        //for conditional visibilty of filters/sorting options
        if (typeof searchval !== 'undefined') {
        if(searchval=="no_search_query")
        {
			document.getElementById("filter_related").style.display= "none";
			document.getElementById("product_grid").style.width= "98%";
			document.getElementById("product_grid").style.margin= "auto";
        }
        else
        {
        	document.getElementById("filter_related").style.display= "block";
			document.getElementById("product_grid").style.width= "78.4%";
			document.getElementById("product_grid").style.marginLeft="1%";
			//document.getElementById("product_grid").style.float= "left";
        }
        }
        //alert(sort_by);        
        //alert(sort_order);
        
        //to set sort radio buttons
        if (typeof sort_by !== 'undefined')
        {
          	if(sort_by=="price")
        	{
        		if(sort_order=="asc")
        		{
        			SetRadiobuttonValue("asc_price");
        		}
        		else{SetRadiobuttonValue("desc_price");}
        	}
        	else
        	{
        		if(sort_order=="asc")
        		{
        			SetRadiobuttonValue("asc_tier");
        		}
        		else{SetRadiobuttonValue("desc_tier");}
        		
        	}
        }
        
        function SetRadiobuttonValue(selectedValue)
        {
  			$(':radio[value="' + selectedValue + '"]').attr('checked', 'checked');
  		}  		
	}
	
	
//	 $('#furniture_form,#laptop_form,#mobile_form').css("display","none");
	   
	    $(".edit_option").click(function(){
        if ($('input[name=edit_option]:checked').val() == "edit") {
           document.getElementById('edit_detail_form').style.display="block";
           //document.getElementById('electronic_form').style.display="none";
           //document.getElementById('mobile_form').style.display="none";
        }
     });
	   
	   
    $(".cat").click(function(){
        if ($('input[name=categories]:checked').val() == "Furniture") {
           document.getElementById('furniture_form').style.display="block";
           document.getElementById('electronic_form').style.display="none";
           //document.getElementById('mobile_form').style.display="none";
        }
        if ($('input[name=categories]:checked').val() == "Electronic") {
            document.getElementById('electronic_form').style.display="block";
            document.getElementById('furniture_form').style.display="none";
            //document.getElementById('mobile_form').style.display="none";
        }
       // if ($('input[name=categories]:checked').val() == "mobile"){
         //  document.getElementById('mobile_form').style.display="block";
          // document.getElementById('laptop_form').style.display="none";
           //document.getElementById('furniture_form').style.display="none";
       // }
     });
     
     $(".f_type").click(function(){
     	if ($('input[name=f_type]:checked').val() == "Tables") {
           document.getElementById('table_details').style.display="block";
           document.getElementById('chair_details').style.display="none";
        }
        if ($('input[name=f_type]:checked').val() == "Chairs") {
            document.getElementById('chair_details').style.display="block";
            document.getElementById('table_details').style.display="none";
        }
     });
      $(".e_type").click(function(){
     	if ($('input[name=e_type]:checked').val() == "Laptops") {
           document.getElementById('laptop_details').style.display="block";
           document.getElementById('cellphone_details').style.display="none";
        }
        if ($('input[name=e_type]:checked').val() == "Cellphones") {
            document.getElementById('cellphone_details').style.display="block";
            document.getElementById('laptop_details').style.display="none";
        }
     });
    
	//for drop downs
	$('#mb_headers span').mouseenter(function() { 
		var elem_class = $(this).attr('class');
		var elem_width = $(this).css('width');
		var elec_width=$('ul.electronics').css('width');
		//alert($('ul.electronics').css('width'));
		var matching_ul = $('ul.' + elem_class);
		matching_ul.css('visibility','visible');
		matching_ul.css('min-width', elem_width);
		$('ul.electronics').css('left', '1.5%');  /* because mb_headers has left margin of 1.5% */
		$('ul.furniture').css('left', '1.5%').css('left', '+='+elec_width);
	}).mouseleave(function() {
		 var elem_class =$(this).attr('class');
		 $('ul.' + elem_class).css('visibility','hidden'); 
	});
	$('#dropdowns ul').mouseenter(function() {
		$(this).css('visibility','visible');
	}).mouseleave(function() {
		$(this).css('visibility','hidden'); }); 	
});