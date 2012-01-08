<?php
	include_once('inc/settings.inc.php');
	include_once('inc/functions.inc.php');
?>
		<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!-- Consider adding a manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Use the .htaccess and remove these lines to avoid edge case issues.
       More info: h5bp.com/b/378 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>The People's News Wire | Occupy.net</title>
  <meta name="description" content="">
  <meta name="author" content="">
	
	<link href='http://fonts.googleapis.com/css?family=Lora:400,400italic|Raleway:100' rel='stylesheet' type='text/css'>
	
  <!-- Mobile viewport optimized: h5bp.com/viewport -->
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

  <link rel="stylesheet" href="css/style.css">
  
  <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

  <!-- All JavaScript at the bottom, except this Modernizr build incl. Respond.js
       Respond is a polyfill for min/max-width media queries. Modernizr enables HTML5 elements & feature detects; 
       for optimal performance, create your own custom Modernizr build: www.modernizr.com/download/ -->
  <script src="js/libs/modernizr-2.0.6.min.js"></script>
</head>

<body>
	<div id="globalBar">
	
	</div>
	
  <header>
		<iframe src="http://www.Occupy.net/nav/occupynet.html#NewsWire" frameborder="0" style="width:100%;height:36px;"></iframe>
  </header>
	
  <div id="main" role="main">
		<div id="newsNav" class="sidebar-left">
			<h3>Channels</h3>
				<?php
					echo buildFeedList($channels,'channel','channels');
				?>
			<hr />
			<h3>Raw Feeds</h3>
				<?php
					echo buildFeedList($feeds,'feed','feeds',0);
				?>
		</div>
		<table id="mainContent">
			<tr>
				<td class="lt-col">
					<div class="headline"><div class="rssTitle">Welcome to the People's News Wire</div><div class="rssDesc">Here you will find a very early sample of the <em>People's News Wire</em>. <a href="http://news.occupy.net">News.occupy.net</a> collects and curates news items from all over the web. Most stories come directly from the occupations involved. Check out the currated channles on the left. You can also view a few raw feeds directly from occupation web sites. Learn more about the <a href="http://wiki.occupy.net/wiki/Occupy.net_News">news wire project at wiki.occupy.net</a></div></div>
					<div class="post_results" id="post_results_main" rss_num="25" rss_url="http://news.occupy.net/channel/157/rss.xml">
						<div class="loading_rss">
							<img alt="Loading..." src="img/loading.gif" />
						</div>
					</div>
				</td>
				<td class="col-space">
				</td>
				<td id="extraContent" class="rt-col">
					<h3>Featured media:</h3>
					<div class="" id="post_results_video">
						<iframe width="300" height="182" src="http://www.youtube.com/embed/Cg6ayc-w3bE" frameborder="0" allowfullscreen></iframe>
					</div>
					<h4>More media:</h4>
					<div class="post_results" id="post_results_media" rss_num="5" rss_url="http://news.occupy.net/channel/67/rss.xml">
						<div class="loading_rss">
							<img alt="Loading..." src="img/loading.gif" />
						</div>
					</div>
					<h3>Featured Content</h3>
					<div class="post_results" id="post_results_featured" rss_num="5" rss_url="http://news.occupy.net/channel/277/rss.xml">
						<div class="loading_rss">
							<img alt="Loading..." src="img/loading.gif" />
						</div>
					</div>
					<h3>News from New York</h3>
					<div class="post_results" id="post_results_local" rss_num="5" rss_url="http://news.occupy.net/channel/184/rss.xml">
						<div class="loading_rss">
							<img alt="Loading..." src="img/loading.gif" />
						</div>
					</div>
				</td>
			</tr>
		</table>
  </div>
	
  <footer>
		Brought to you by the <a href="http://www.nycga.net/groups/tech" target="_blank">NYC General Assembly Tech Ops group</a>
  </footer>


  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.1.min.js"><\/script>')</script>


  <!-- scripts concatenated and minified via build script -->
  <script defer src="js/plugins.js"></script>
  <script defer src="js/script.js"></script>
  <!-- end scripts -->


  <!-- Asynchronous Google Analytics snippet. Change UA-XXXXX-X to be your site's ID.
       mathiasbynens.be/notes/async-analytics-snippet -->
  <script>
    var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
  </script>

  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7 ]>
    <script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->

</body>
</html>
