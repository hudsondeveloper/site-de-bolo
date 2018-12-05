jQuery(window).load(function() {
	/* demo */
	
	jQuery('body').append(
	"<div class='switcher'>"+
		"<div class='switcher-wrapper'>"+

			"<button class='switcher-show-hide'><i class='fa fa-cog'></i></button>"+
			"<div class='switcherContents'>"+
				"<header><h5>Style Switcher</h5></header>"+
				"<!--  Skins Colors -->"+
				"<div class='switcherContent skinsColor'>"+
					"<span class='title'>Skins Colors</span>"+
					"<ul class='demo-content demo-color'>"+
					
						"<li data-name='gnrl_color' data-value='blue' data-value-2='00BBDD' style='background-color: #00BBDD;'></li>"+
						
						"<li data-name='gnrl_color' data-value='pink' data-value-2='ff6d84' style='background-color: #ff6d84;'></li>"+
						
						"<li data-name='gnrl_color' data-value='green' data-value-2='3ECEB4' style='background-color: #3ECEB4;'></li>"+
						
						"<li data-name='gnrl_color' data-value='red' data-value-2='C63F3F' style='background-color: #C63F3F;'></li>"+
						
						"<li data-name='gnrl_color' data-value='purple' data-value-2='877FCE' style='background-color: #877FCE;'></li>"+

						"<li data-name='gnrl_color' data-value='orange' data-value-2='E07159' style='background-color: #E07159;'></li>"+

						"<li data-name='gnrl_color' data-value='yellow' data-value-2='F2B838' style='background-color: #F2B838;'></li>"+
					
					"</ul>"+
				"</div>"+
				"<!--  End Skins Colors -->"+
				
				
				"<!--  Layout -->"+
				"<div class='switcherContent tempLayout'>"+
					"<span class='title'>Layout</span>"+
					"<ul class='demo-content demo-layout'>"+
					
						"<li  data-name='gnrl_layout' data-value='wide'>Wide</li>"+
						
						"<li data-name='gnrl_layout' data-value='boxed'>Boxed</li>"+
						
						"<li data-name='gnrl_layout' data-value='boxed2'>Boxed 2</li>"+
					
					"</ul>"+
				"</div>"+
				"<!--  End Layout -->"+
				
				"<!--  Patterns -->"+
				"<div class='switcherContent patterens'>"+
					"<span class='title'>Patterens</span>"+
					"<ul class='demo-content demo-pattern'>"+
					
						"<li data-name='gnrl_pattern' data-value='bg1'><img alt='' src='images/patterns/bg1.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg2'><img alt='' src='images/patterns/bg2.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg3'><img alt='' src='images/patterns/bg3.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg4'><img alt='' src='images/patterns/bg4.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg5'><img alt='' src='images/patterns/bg5.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg6'><img alt='' src='images/patterns/bg6.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg7'><img alt='' src='images/patterns/bg7.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg8'><img alt='' src='images/patterns/bg8.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg9'><img alt='' src='images/patterns/bg9.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg10'><img alt='' src='images/patterns/bg10.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg11'><img alt='' src='images/patterns/bg11.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg12'><img alt='' src='images/patterns/bg12.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg13'><img alt='' src='images/patterns/bg13.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg14'><img alt='' src='images/patterns/bg14.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg15'><img alt='' src='images/patterns/bg15.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg16'><img alt='' src='images/patterns/bg16.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg17'><img alt='' src='images/patterns/bg17.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg18'><img alt='' src='images/patterns/bg18.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg19'><img alt='' src='images/patterns/bg19.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg20'><img alt='' src='images/patterns/bg20.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg21'><img alt='' src='images/patterns/bg21.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg22'><img alt='' src='images/patterns/bg22.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg23'><img alt='' src='images/patterns/bg23.png'></li>"+
						
						"<li data-name='gnrl_pattern' data-value='bg24'><img alt='' src='images/patterns/bg24.png'></li>"+
					
					"</ul>"+
				"</div>"+
				"<!--  End Patterns -->"+
					
			"</div>"+
		"</div>"+
	"</div>");
	
	
		

	//-- show and hide switcher --

	jQuery('.switcher-show-hide').click(function() {
		if ( jQuery('.switcher-show-hide').hasClass('switcher-toggle') )
			{
			jQuery('.switcher-show-hide').removeClass('switcher-toggle');
			jQuery('.switcher').removeClass('opened');
		}else
		{   
			jQuery('.switcher-show-hide').addClass('switcher-toggle');
			jQuery('.switcher').addClass('opened');
		}

	});

	jQuery('.switcher').click(function(e){
		e.stopPropagation();
	});

	jQuery('html').on( 'click', function ( _ev )
	{  
		jQuery('.switcher-show-hide').removeClass('switcher-toggle');
		jQuery('.switcher').removeClass('opened');
	});


   //-- controlling the position of switcher --
	var jQueryswitcherWrappper = jQuery('.switcher-wrapper');

	jQueryswitcherWrappper.resize(function(){

		jQuery('.switcher').css({ 'left' : - jQueryswitcherWrappper.width()});

	});

	jQueryswitcherWrappper.trigger('resize');



	var emerald_gnrl_color=false;
	
	// Pattern
	jQuery('li[data-name=gnrl_pattern]').click(function() {
		emerald_gnrl_gnrl_pattern = jQuery(this).attr("data-value");
		if(emerald_gnrl_gnrl_pattern!=false){
			pointer_pattern(emerald_gnrl_gnrl_pattern);
		}
	});
	
	// General Pattern
	function pointer_pattern(pattern_style){
		if (jQuery(".active-layout").attr("data-value") == "boxed" || jQuery(".active-layout").attr("data-value") == "boxed2") {
			jQuery("body").css("background","url(images/patterns/"+pattern_style+".png) repeat");
		}
	}
	
	// Layout
	jQuery('li[data-name=gnrl_layout]').click(function() {
		jQuery("*").removeClass("active-layout");
		jQuery(this).addClass("active-layout");
		jQuery('.owl-stage').resize();	
		jQuery(window).resize();
		emerald_gnrl_layout = jQuery(this).attr("data-value");
		if(emerald_gnrl_layout!=false){
			pointer_layout(emerald_gnrl_layout);
		}
	});
	
	// General Layout
	function pointer_layout(layout_style){
		if (layout_style == "wide") {
			jQuery("body").removeClass("body-boxed").removeClass("body-boxed-2");
			jQuery(".all-wrapper").removeClass("boxed").removeClass("boxed-2");
			jQuery('.owl-stage').resize();
			jQuery(window).resize();
			jQuery("body").attr("style","");
		}else if (layout_style == "boxed") {
			jQuery("body").addClass("body-boxed").removeClass("body-boxed-2");
			jQuery(".all-wrapper").addClass("boxed").removeClass("boxed-2");
			jQuery('.owl-stage').resize();
			jQuery(window).resize();
			jQuery("body").attr("style","");
		}else if (layout_style == "boxed2") {
			jQuery("body").removeClass("body-boxed").addClass("body-boxed-2");
			jQuery(".all-wrapper").removeClass("boxed").addClass("boxed-2");
			jQuery('.owl-stage').resize();
			jQuery(window).resize();
			jQuery("body").attr("style","");
		}
	}
	
	// Color
	jQuery('li[data-name=gnrl_color]').click(function() {
		emerald_gnrl_color = jQuery(this).attr("data-value");
		emerald_gnrl_color_2 = jQuery(this).attr("data-value-2");
		if(emerald_gnrl_color!=false){
			pointer_color(emerald_gnrl_color,emerald_gnrl_color_2);
		}
	});
	
	// General Color
	function pointer_color(color_style,color_style_2){
		if (color_style != "skins") {
			jQuery(".information-box .ribbon").attr("src","images/ribbon-"+color_style+".png");
			jQuery('head').append('<style type="text/css">.push_options{background:#'+color_style_2+'}</style>');
		}else if (color_style == "skins") {
			jQuery(".information-box .ribbon").attr("src","images/ribbon-pink.png");
			jQuery('head').append('<style type="text/css">.push_options{background:#'+color_style_2+'}</style>');
		}
		jQuery('head').append('<link rel="stylesheet" href="css/skins/'+color_style+'.css">');
	}
	
});