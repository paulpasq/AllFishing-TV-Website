"use strict";
var $ = function(id)
{
	return document.getElementById(id);
}

window.onload = function()
{
	rodFill();
}

function rodFill()
{
	var arRod = document.getElementsByClassName("rod");
	for(var i = 0; i < arRod.length; i++)
	{
		arRod[i].id = "active2";
	}
	
	document.getElementsByClassName("reel");
	var arReel = document.getElementsByClassName("reel");
	for(var i = 0; i < arReel.length; i++)
	{
		arReel[i].id = "reels";
	}
	
	document.getElementsByClassName("boat");
	var arBoat = document.getElementsByClassName("boat");
	for(var i = 0; i < arBoat.length; i++)
	{
		arBoat[i].id = "boat";
	}
	
	document.getElementsByClassName("cam");
	var arCam = document.getElementsByClassName("cam");
	for(var i = 0; i < arCam.length; i++)
	{
		arCam[i].id = "cam";
	}
	$("item-desc-1").innerHTML = "";
	$("item-desc-2").innerHTML = "";
	$("item-desc-3").innerHTML = "";
	
	var itemOneDesc = function()
	{
		$("item-desc-1").innerHTML = "<br><br><a class = \"product\" href = \"https://www.academy.com/shop/pdp/daiwa-laguna%C2%AE-freshwater-saltwater-spinning-rod\"><div class=\"panel panel-primary orange-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">Daiwa Laguna</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\">" +
		"<b>Features and Benefits</b>"+
		"<br><ul>"+
		"<li>IM-6 graphite blank with blank-through-handle, woven carbon construction for durability</li>" +
		"<li>1-piece design (LAG601MFS, LAG661MFS, LAG701MLXS); 2-piece design (LAG702MFS)</li>"+
		"<li>7\" handle (LAG601MFS, LAG661MFS); 8\" handle (LAG701MLXS, LAG702MFS)</li>"+
		"<li>Lightweight, split foam grips offer comfort when reeling in tough fish</li>"+
		"<li>7 aluminum-oxide guides provide smooth line movement</li>"+
		"<li>Stainless-steel hooded reel seat</li>"+
		"<li>Hook keeper</li>"+
		"</ul>"+
		"<br><br>"+
		"<b>Specifications</b>"+
		"<br>"+
		"<ul>"+
		"<li>Water Type: Freshwater</li>"+
		"<li>Action: Fast (LAG601MFS, LAG661MFS, LAG702MFS); extra fast (LAG701MLXS)</li>"+
		"<li>Saltwater Suitable: Yes</li>"+
		"<li>Number of guides: 7</li>"+
		"<li>Overall length (ft.): 6' (LAG601MFS); 6'6\" (LAG661MFS); 7' (LAG702MFS, LAG701MLXS)</li>"+
		"<li>Power: M (LAG601MFS, LAG661MFS, LAG702MFS); ML (LAG701MLXS)</li>"+
		"<li>Manufacturer warranty - general: 1 year limited</li>"+
		"<li>Lure weight (oz.): 1/8 - 3/4 (LAG601MFS, LAG661MFS, LAG702MFS); 1/8 - 1/2 (LAG701MLXS)</li>"+
		"<li>Fish Species: Bass</li>"+
		"<li>Line weight (lb.): 6 - 15 (LAG601MFS, LAG661MFS, LAG702MFS); 4 - 12 (LAG701MLXS)</li>"+
		"</ul>"+
		"</div></div></a>";
		$("item-desc-2").innerHTML = "";
		$("item-desc-3").innerHTML = "";
	}
	var itemTwoDesc = function()
	{
		$("item-desc-1").innerHTML = "";
		$("item-desc-2").innerHTML = "<br><br><div class=\"panel panel-primary green-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">No 8. Tackle Blackout</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\"><b>DISCONTINUED</b><br><br>HTC3 blends high modulus 30 & 24 ton graphite with our high performance resin that puts the most technologically advanced blank at your fingertips. No.8 Tackle Co.'s Team has designed the perfect graphite pattern raising the bar of strength and sensitivity to a whole new level.</div></div>";
		$("item-desc-3").innerHTML = "";
	}
	var itemThreeDesc = function()
	{
		$("item-desc-1").innerHTML = "";
		$("item-desc-2").innerHTML = "";
		$("item-desc-3").innerHTML = "<br><br><a class = \"product\" href = \"https://www.cabelas.com/product/CABELAS-TOURNEY-TRAIL-CAST/2701902.uts\"><div class=\"panel panel-primary red-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">Cabela's Tourney Trail</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\">" +
		"<ul>"+
		"<li>Value-driven design excels in performance</li>"+
		"<li>Lightweight, strong Japanese graphite blanks</li>"+
		"<li>P-cork handles provide effortless grip to fight hand fatigue</li>"+
		"<li>Durable stainless steel guides and titanium-oxide inserts</li>"+
		"<li>Medium to heavy actions excel at all your bass-fishing tactics</li>"+
		"</ul>"+
		"<br>Featuring species-specific actions and designed by in-house experts, our Tourney Trail Casting Rods deliver an incredible performance-to-cost ratio. Super-lightweight Japanese graphite blank construction delivers exceptional strength, while P-cork handles offer fatigue-fighting comfort for long days on the water. Stainless steel guides with titanium-oxide inserts stand up to heavy fish and inclement weather, plus they facilitate fast line speed for long, accurate casts. Medium to heavy actions are ideal for targeting big bass. Available in one- and two-piece models.<br>"+
		""+
		"</div></div></a>";
	}
	
	
	$("item-title-1").innerHTML = "Daiwa Laguna<br><br>";
	$("item-title-2").innerHTML = "No. 8 Tackle Blackout<br><br>";
	$("item-title-3").innerHTML = "Cabela's Tourney Trail<br><br>";
	
	$("item-pic-1").innerHTML = "<a href = \"https://www.academy.com/shop/pdp/daiwa-laguna%C2%AE-freshwater-saltwater-spinning-rod\"><img src = \"img/rod1.png\"></a>";
	$("item-pic-2").innerHTML = "<img src = \"img/rod2.png\">";
	$("item-pic-3").innerHTML = "<a href = \"https://www.cabelas.com/product/CABELAS-TOURNEY-TRAIL-CAST/2701902.uts\"><img style = \"width:85%;\" src = \"img/rod3b.png\"></a>";
	
	$("item-pic-1").onmouseover = itemOneDesc;
	$("item-pic-2").onmouseover = itemTwoDesc;
	$("item-pic-3").onmouseover = itemThreeDesc;
}

function reelFill()
{
	var arRod = document.getElementsByClassName("rod");
	for(var i = 0; i < arRod.length; i++)
	{
		arRod[i].id = "rods";
	}
	
	document.getElementsByClassName("reel");
	var arReel = document.getElementsByClassName("reel");
	for(var i = 0; i < arReel.length; i++)
	{
		arReel[i].id = "active2";
	}
	
	document.getElementsByClassName("boat");
	var arBoat = document.getElementsByClassName("boat");
	for(var i = 0; i < arBoat.length; i++)
	{
		arBoat[i].id = "boat";
	}
	
	document.getElementsByClassName("cam");
	var arCam = document.getElementsByClassName("cam");
	for(var i = 0; i < arCam.length; i++)
	{
		arCam[i].id = "cam";
	}
	$("item-desc-1").innerHTML = "";
	$("item-desc-2").innerHTML = "";
	$("item-desc-3").innerHTML = "";
	
	
	var itemOneDesc = function()
	{
		$("item-desc-1").innerHTML = "<br><br><a class = \"product\" href = \"https://www.amazon.com/Abu-Garcia-Profile-Baitcast-Fishing/dp/B011LV0LQY/ref=sr_1_3?ie=UTF8&qid=1544506624&sr=8-3&keywords=abu+garcia+silver+max\"><div class=\"panel panel-primary orange-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">Abu Garcia Silver Max</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\">" + 
		"<b>Specifications</b>" + 
		"<ul>" + 
		"<li>One-piece graphite frame</li>" +
		"<li>5 stainless steel ball bearings + 1 roller bearing</li>" +
		"<li>Power Disk drag system</li>" +
		"<li>Duragear brass gear</li>" +
		"<li>MagTrax brake system</li>" +
		"<li>High-density EVA handles</li>" +
		"<li>Machined aluminum spool</li>" +
		"</ul>" +
		"</div></div></a>";
		$("item-desc-2").innerHTML = "";
		$("item-desc-3").innerHTML = "";
	}
	var itemTwoDesc = function()
	{
		$("item-desc-1").innerHTML = "";
		$("item-desc-2").innerHTML = "<br><br><a class = \"product\" href = \"https://www.tacklewarehouse.com/Lews_Mach_Speed_Spool_MCS_Casting_Reel/descpage-LMC.html\"><div class=\"panel panel-primary green-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">Lew's Mach Speed Spool</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\">" +
		"Featuring Lew's new exclusive Super Low Profile Reel Platform, the Lew's Mach Speed Spool MCS Casting Reel is one of the lowest profile baitcast reels ever created. Extremely easy to palm and fish, its strong and lightweight, graphite frame and sideplates provide a rigid base of operations, and its high strength solid brass main gear and crank shaft deliver plenty of power as well.<br><br>The externally adjustable MCS: Magnetic Control System also allows you to fine tune your casting for a wide range of lures and fishing conditions, and the durable Rulon drag system provides up to 10lb or max drag power. Loaded with features and lower-profile than ever before, the Lew's Mach Speed Spool MCS Casting Reel is a dream to fish." + 
		"<br><br>" + 
		"<ul>" + 
		"<li>Strong and lightweight, graphite frame and sideplates</li>" + 
		"<li>Machined and anodized aluminum U-shape spool</li>" + 
		"<li>High strength solid brass main gear and crank shaft</li>" + 
		"<li>Externally adjustable Magnetic Control System (MCS) </li>" + 
		"<li>Double-anodized aluminum spool tension adjustment</li>" + 
		"<li>Durable Rulon drag system</li>" + 
		"<li>Anodized bowed aluminum 95mm handle </li>" + 
		"<li>Lew's custom SoftTouch paddle handle knobs</li>" + 
		"<li>Anodized aluminum bowed drag star</li>" + 
		"<li>Quick release sideplate lock lever</li>" + 
		"<li>Zirconia line guide</li>" + 
		"<li>External lube port</li>" + 
		"</ul>" + 
		"</div></div></a>";
		$("item-desc-3").innerHTML = "";
	}
	var itemThreeDesc = function()
	{
		$("item-desc-1").innerHTML = "";
		$("item-desc-2").innerHTML = "";
		$("item-desc-3").innerHTML = "<br><br><a class = \"product\" href = \"https://www.dickssportinggoods.com/p/lews-carbon-fire-speed-spool-baitcasting-reel-16lewucrbnfr751rhree/16lewucrbnfr751rhree?\"><div class=\"panel panel-primary red-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">Lew's Carbon Fiber Speed Spool</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\">" + 
		"Add more firepower to your fishing arsenal with the Carbon Fire Speed Spool Baitcasting Reel. This reel features a Magnetic Control System and 2 washer drag system that includes 1 Rulon washer. In addition, it is equipped with a stainless steel, double-shielded bearing system and high strength brass drive gear. The Lew's Carbon Fire Speed Spool Baitcasting Reel is constructed with a graphite frame, side covers and hood." + 
		"<br><br>" +
		"<b>Features:</b>" + 
		"<ul>" + 
		"<li>Baitcasting reel</li>" + 
		"<li>Magnetic Control System</li>" + 
		"<li>2 drag washers including 1 Rulon washer</li>" + 
		"<li>6+1 stainless steel, double-shielded bearing system</li>" + 
		"<li>Graphite frame, side covers and hood</li>" + 
		"<li>High strength brass drive gear</li>" + 
		"<li>U die-casted spool</li>" + 
		"<li>Zirconia line guide</li>" + 
		"<li>Bowed aluminum 95mm handle with Lew's paddle knob</li>" + 
		"<br><br>" + 
		"<li>Brand: Lew's</li>" + 
		"<li>Country of Origin: Imported</li>" + 
		"<li>Style: CF1SHAC, CF1SHLAC</li>" + 
		"</ul>" + 
		"</div></div></a>";
	}
	
	
	$("item-title-1").innerHTML = "Abu Garcia Silver Max<br><br>";
	$("item-title-2").innerHTML = "Lew's Mach Speed Spool<br><br>";
	$("item-title-3").innerHTML = "Lew's Carbon Fiber Speed Spool<br><br>";
	
	$("item-pic-1").innerHTML = "<a href = \"https://www.amazon.com/Abu-Garcia-Profile-Baitcast-Fishing/dp/B011LV0LQY/ref=sr_1_3?ie=UTF8&qid=1544506624&sr=8-3&keywords=abu+garcia+silver+max\"><img src = \"img/reel1.png\"></a>";
	$("item-pic-2").innerHTML = "<a href = \"https://www.tacklewarehouse.com/Lews_Mach_Speed_Spool_MCS_Casting_Reel/descpage-LMC.html\"><img src = \"img/reel2.png\"></a>";
	$("item-pic-3").innerHTML = "<a href = \"https://www.dickssportinggoods.com/p/lews-carbon-fire-speed-spool-baitcasting-reel-16lewucrbnfr751rhree/16lewucrbnfr751rhree?\"><img style = \"width:85%;\" src = \"img/reel3.png\"></a>";
	
	$("item-pic-1").onmouseover = itemOneDesc;
	$("item-pic-2").onmouseover = itemTwoDesc;
	$("item-pic-3").onmouseover = itemThreeDesc;
}

function boatFill()
{
	var arRod = document.getElementsByClassName("rod");
	for(var i = 0; i < arRod.length; i++)
	{
		arRod[i].id = "rods";
	}
	
	document.getElementsByClassName("reel");
	var arReel = document.getElementsByClassName("reel");
	for(var i = 0; i < arReel.length; i++)
	{
		arReel[i].id = "reels";
	}
	
	document.getElementsByClassName("boat");
	var arBoat = document.getElementsByClassName("boat");
	for(var i = 0; i < arBoat.length; i++)
	{
		arBoat[i].id = "active2";
	}
	
	document.getElementsByClassName("cam");
	var arCam = document.getElementsByClassName("cam");
	for(var i = 0; i < arCam.length; i++)
	{
		arCam[i].id = "cam";
	}
	$("item-desc-1").innerHTML = "";
	$("item-desc-2").innerHTML = "";
	$("item-desc-3").innerHTML = "";
	
	var itemOneDesc = function()
	{
		$("item-desc-1").innerHTML = "<br><br><div class=\"panel panel-primary orange-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">1988 Fisher 18ft</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\"><b>NO DESCRIPTION AVAILABLE</b></div></div>";
		$("item-desc-2").innerHTML = "";
		$("item-desc-3").innerHTML = "";
	}
	var itemTwoDesc = function()
	{
		$("item-desc-1").innerHTML = "";
		$("item-desc-2").innerHTML = "<br><br><div class=\"panel panel-primary green-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">1989 Johnson 100hp</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\"><b>NO DESCRIPTION AVAILABLE</b></div></div>";
		$("item-desc-3").innerHTML = "";
	}
	var itemThreeDesc = function()
	{
		$("item-desc-1").innerHTML = "";
		$("item-desc-2").innerHTML = "";
		$("item-desc-3").innerHTML = "<br><br><a class = \"product\" href = \"https://www.dickssportinggoods.com/p/lowrance-elite-7-ti-gps-fish-finder-with-mid-high-downscan-000-12417-001-16lowalt7tmdhghdwfel/16lowalt7tmdhghdwfel?camp=CSE:DSG_pg1052338968_ecom_PLA_452&gclid=Cj0KCQiAurjgBRCqARIsAD09sg9x2mLzHvQczeURguNx4qRx-SnCQW1nEF6gDOPVofKMgj53zgK72NkaAuCUEALw_wcB\"><div class=\"panel panel-primary red-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">Lowrance Fish Finder</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\">" + 
		"The Elite-7 Ti is loaded with features that anglers need to find the perfect fishing spot. Using CHIRP Sonar and Downscan Imaging with FishReveal Smart Target View and Advanced Signal Processing technologies, this device gives you a complete view beneath your boat. In addition, the built in GPS and pre-loaded maps help you navigate with ease. The Lowrance Elite-7 Ti GPS Fish Finder features wireless connectivity and a high definition touchscreen." + 
		"<br><br>" + 
		"<b>Sonar</b>" + 
		"<ul>" + 
		"<li>CHIRP Sonar and Downscan Imaging for a detailed view beneath the surface</li>" + 
		"<li>FishReveal Smart Target View for a precise view of bottom detail, structure and bait fish</li>" + 
		"<li>TrackBack lets you review recorded sonar history</li>" + 
		"<li>Advanced Signal Processing (ASP) reduces the need for manual adjustments</li>" + 
		"</ul>" + 
		"<br><br>" +
		"<b>Navigation</b>" +
		"<ul>" + 
		"<li>Built-in GPS antenna for accurate positioning</li>" + 
		"<li>Pre-loaded C-MAP US charts with 1-foot contours on more than 3,000 lakes and standard 10-foot contours on more than 11,000 lakes</li>" + 
		"<li>Pre-loaded high-detail coastal mapping and C-Map Navigation Paletter</li>" + 
		"<li>microSD card slot</li>" + 
		"</ul>" + 
		"<br><br>" +
		"<b>Connectivity</b>" + 
		"<ul>" + 
		"<li>Network access to boat and engine information with NMEA 2000 engine data monitoring, waypoint sharing and SmartSteer trolling motor control</li>" + 
		"<li>Built-in wireless connectivity access GoFree Cloud to shop for and download maps</li>" + 
		"</ul>" + 
		"<br><br>" + 
		"<b>Interface</b>" +
		"<ul>" +
		"<li>High resolution, LED-backlit color display</li>" + 
		"<li>Easy-to-use touchscreen</li>" + 
		"<li>Quick release bracket</li>" + 
		"</ul>" +
		"<br><br>" +
		"<ul>" +
		"<li>Brand: Lowrance</li>" + 
		"<li>Country of Origin: Imported</li>" + 
		"<li>Style: 000-12417-001</li>" + 
		"</ul>" +
		"</div></div></a>";
	}
	
	
	$("item-title-1").innerHTML = "1988 Fisher 18ft<br><br>";
	$("item-title-2").innerHTML = "1989 Johnson 100hp<br><br>";
	$("item-title-3").innerHTML = "Lowrance Fish Finder<br><br>";
	
	$("item-pic-1").innerHTML = "<img style = \"width:100%;\"src = \"img/boat1.png\">";
	$("item-pic-2").innerHTML = "<img style = \"width:50%;\" src = \"img/boat2.png\">";
	$("item-pic-3").innerHTML = "<a href = \"https://www.dickssportinggoods.com/p/lowrance-elite-7-ti-gps-fish-finder-with-mid-high-downscan-000-12417-001-16lowalt7tmdhghdwfel/16lowalt7tmdhghdwfel?camp=CSE:DSG_pg1052338968_ecom_PLA_452&gclid=Cj0KCQiAurjgBRCqARIsAD09sg9x2mLzHvQczeURguNx4qRx-SnCQW1nEF6gDOPVofKMgj53zgK72NkaAuCUEALw_wcB\"><img style = \"width:85%;\" src = \"img/boat3.png\"></a>";
	
	$("item-pic-1").onmouseover = itemOneDesc;
	$("item-pic-2").onmouseover = itemTwoDesc;
	$("item-pic-3").onmouseover = itemThreeDesc;
}

function camFill()
{
	var arRod = document.getElementsByClassName("rod");
	for(var i = 0; i < arRod.length; i++)
	{
		arRod[i].id = "rods";
	}
	
	document.getElementsByClassName("reel");
	var arReel = document.getElementsByClassName("reel");
	for(var i = 0; i < arReel.length; i++)
	{
		arReel[i].id = "reels";
	}
	
	document.getElementsByClassName("boat");
	var arBoat = document.getElementsByClassName("boat");
	for(var i = 0; i < arBoat.length; i++)
	{
		arBoat[i].id = "boat";
	}
	
	document.getElementsByClassName("cam");
	var arCam = document.getElementsByClassName("cam");
	for(var i = 0; i < arCam.length; i++)
	{
		arCam[i].id = "active2";
	}
	$("item-desc-1").innerHTML = "";
	$("item-desc-2").innerHTML = "";
	$("item-desc-3").innerHTML = "";
	
	var itemOneDesc = function()
	{
		$("item-desc-1").innerHTML = "<br><br><a class = \"product\" href = \"https://www.amazon.com/Sony-16-50mm-Mirrorless-Digital-Camera/dp/B00MHPAFAG\"><div class=\"panel panel-primary orange-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">Sony A5100</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\">" +
		"Capture that crucial moment with ultra-fast autofocusing, 179 AF points and 6 fps. This lightweight camera delivers 24.3MP of detail even in low light, and you can share photos right to your smartphone through built-in Wi-Fi. Record Full HD Video or flip over the 180 degree tilt screen for perfectly framed selfies." +
		"<br><br>" +
		"<ul>" +
		"<li>Ultra-fast auto focus with 179 AF points and 6Fps</li>" +
		"<li>Capture life in high resolution with 24MP APS-C sensor.Lens compatibility Sony E-mount lenses</li>" +
		"<li>Instant sharing via smartphone with Wi-Fi and NFC1</li>" +
		"<li>Record Full HD 1080/24/60P video3 up to 50MB/s</li>" +
		"<li>Contains- Rechargeable Battery (NP-FW50) AC Charger (AC-UB10) Lens cap Shoulder strap Micro USB cable</li>" +
		"</ul>" +
		"</div></div></a>";
		$("item-desc-2").innerHTML = "";
		$("item-desc-3").innerHTML = "";
	}
	var itemTwoDesc = function()
	{
		$("item-desc-1").innerHTML = "";
		$("item-desc-2").innerHTML = "<br><br><a class = \"product\" href = \"https://www.amazon.com/GoPro-MAIN-91769-HERO4-Silver/dp/B00NIYJF6U\"><div class=\"panel panel-primary green-panel\"> <div class=\"panel-heading\">	<h3 class=\"panel-title\">GoPro Hero 4 Silver</h3> </div> <div style = \"text-align:left;\" class=\"panel-body\">" +
		"<ul>" +
		"<li>Built-in touch display for easy camera control, shot-framing and playback</li>" +
		"<li>Professional 1080p60 and 720p120 video with 12MP photos at up to 30 frames per second</li>" +
		"<li>Built-in Wi-Fi and Bluetooth support the GoPro App, Smart Remote and more</li>" +
		"<li>Improved camera control and built-in video trimming lets you create and save short video clips right on your camera</li>" +
		"<li>Protune with SuperView delivers cinema-quality capture and advanced manual control for photos and video with the world’s most immersive wide-angle field of view</li>" +
		"</ul>" +
		"</div></div></a>";
		$("item-desc-3").innerHTML = "";
	}
	var itemThreeDesc = function()
	{
		$("item-desc-1").innerHTML = "";
		$("item-desc-2").innerHTML = "";
		$("item-desc-3").innerHTML = "";
	}
	
	
	$("item-title-1").innerHTML = "Sony A5100<br><br>";
	$("item-title-2").innerHTML = "GoPro Hero 4 Silver<br><br>";
	$("item-title-3").innerHTML = "";
	
	$("item-pic-1").innerHTML = "<a href = \"https://www.amazon.com/Sony-16-50mm-Mirrorless-Digital-Camera/dp/B00MHPAFAG\"><img src = \"img/cam1.png\"></a>";
	$("item-pic-2").innerHTML = "<a href = \"https://www.amazon.com/GoPro-MAIN-91769-HERO4-Silver/dp/B00NIYJF6U\"><img src = \"img/cam2.png\"></a>";
	$("item-pic-3").innerHTML = "";
	
	$("item-pic-1").onmouseover = itemOneDesc;
	$("item-pic-2").onmouseover = itemTwoDesc;
	$("item-pic-3").onmouseover = itemThreeDesc;
}