<title>Confirm Upload</title>

<div style="padding: 1.1%; width:450px;margin:auto">
		<div id="confirm_form">
	<?php 
	$attributes_upload = array('id' => 'confirm_upload');
	    echo $suramrit; //use  these variables from $data to fill form... fill form to data base.. :)
		echo form_open_multipart('seller_acc/do_upload',$attributes_upload);
		?>
		<div id ="product details" style="visibility:visible; display: none" > <!-- Do not stare at this piece of code for long time... it gives out harmful radiations 
		 	
		 Might burn your eyes
		 	
		 So hardcode-Much Wowe	-->
		<?php
		echo form_input('p_name', set_value('p_name',$p_name ));
		echo form_input('p_category', set_value('p_category', $p_category));
		echo form_input('p_subcategory', set_value('p_subcategory', $p_subcategory));
		echo form_input('p_smart_price', set_value('p_smart_price', $p_smart_price));
		echo form_input('p_tier', set_value('p_tier', $p_tier));
		?>
		</div>
		<?php
		//echo form_label('Product Name','p_name');
		//echo form_input('productname', set_value('productname',$p_name ));
		echo form_fieldset('The evaluated teir for your product is');
		echo form_label($p_tier,'p_tier');
		echo form_fieldset_close();
		echo "<br />";
		echo "<br />";
		echo $_POST['productname'];
		echo "<br />";
		echo "<br />";
		echo form_fieldset('The Smart price for this product is:');
		echo form_label($p_smart_price,'p_sp');
		echo form_fieldset_close();
	    echo form_label('Enter Asking price for your product!','ask_price'); 
		echo form_input('ask_price', set_value('ask_price', 'Enter your asking price'));
		echo form_label('Enter a brief description of the product','p_desc');
		echo form_input('p_desc', set_value('p_desc', 'Enter a Brief Description of the product!'));
		echo form_label('Choose 3 Images','image2');
		echo "<input type='file' name='userfiles[]' size='20' multiple/>"; 
		echo "<input type='submit' name='submit2' value='upload' /> ";
		echo anchor('seller_acc','Cancel');	
		echo form_close();
		?>
		
</div>
	</div>