	// RSS FEED (adapted from zrssfeed plugin)

	$.fn.rssfeed = function(url, options, fn) {	
	
		// Set plugin defaults
		var defaults = {
			limit: 10,
			header: false,
			titletag: 'h4',
			date: true,
			content: true,
			snippet: false,
			media: true,
			showerror: true,
			errormsg: '',
			key: null,
			ssl: false,
			linktarget: '_self'
		};  
		var options = $.extend(defaults, options); 
		
		// Functions
		return this.each(function(i, e) {
			var $e = $(e);
			var s = '';

			// Check for SSL protocol
			if (options.ssl) s = 's';
						
			// Check for valid url
			if(url == null) return false;
			
			// Create Google Feed API address
			var api = "http"+ s +"://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(url);
			if (options.limit != null) api += "&num=" + options.limit;
			if (options.key != null) api += "&key=" + options.key;
			api += "&output=json_xml"

			// Send request
			$.getJSON(api, function(data){
				
				// Check for error
				if (data.responseStatus == 200) {
	
					// Process the feeds
					_process(e, data.responseData, options);

					// Optional user callback function
					if ($.isFunction(fn)) fn.call(this,$e);
					
				} else {

					// Handle error if required
					if (options.showerror)
						if (options.errormsg != '') {
							var msg = options.errormsg;
						} else {
							var msg = data.responseDetails;
						};
						$(e).html('<div class="rssError"><p>'+ msg +'</p></div>');
				};
			});				
		});
	};
	
	// Function to create HTML result
	var _process = function(e, data, options) {

		// Get JSON feed data
		var feeds = data.feed;
		if (!feeds) {
			return false;
		}
		var html = '';	
		
		// Get XML data for media (parseXML not used as requires 1.5+)
		if (options.media) {
			var xml = getXMLDocument(data.xmlString);
			var xmlEntries = xml.getElementsByTagName('item');
		}
					
		// Add feeds
		for (var i=0; i<feeds.entries.length; i++) {
			
			// Get individual feed
			var entry = feeds.entries[i];
			var pubDate;

			// Format published date
			if (entry.publishedDate) {
				var entryDate = new Date(entry.publishedDate);
				var pubDate = entryDate.toLocaleDateString() + ' ' + entryDate.toLocaleTimeString();
			}
			
			// Add feed divs
			html += '<div class="element news" title="News from '+ feeds.title +'">' + '<h4 class="title">'+ entry.title +'</h4>'
			if (options.date && pubDate) html += '<p class="date">'+ pubDate +'</p>'
			if (options.content) {
			
				// Use feed snippet if available and optioned
				if (options.snippet && entry.contentSnippet != '') {
					var content = entry.contentSnippet;
				} else {
					var content = entry.content;
				}
				
				html += '<p class="text">'+ content +'</p>'
			}
			
			// Add any media
			if (options.media && xmlEntries.length > 0) {
				var xmlMedia = xmlEntries[i].getElementsByTagName('enclosure');
				if (xmlMedia.length > 0) {
					html += '<div class="rssMedia"><div>Media files</div><ul>'
					for (var m=0; m<xmlMedia.length; m++) {
						var xmlUrl = xmlMedia[m].getAttribute("url");
						var xmlType = xmlMedia[m].getAttribute("type");
						var xmlSize = xmlMedia[m].getAttribute("length");
						html += '<li><a href="'+ xmlUrl +'" title="Download this media">'+ xmlUrl.split('/').pop() +'</a> ('+ xmlType +', '+ formatFilesize(xmlSize) +')</li>';
					}
					html += '</ul></div>'
				}
				html += '</div>';
			}
			
		}
		
		$(e).html(html);

		// Apply target to links
		$('a',e).attr('target',options.linktarget);
	};
	
	function formatFilesize(bytes) {
		var s = ['bytes', 'kb', 'MB', 'GB', 'TB', 'PB'];
		var e = Math.floor(Math.log(bytes)/Math.log(1024));
		return (bytes/Math.pow(1024, Math.floor(e))).toFixed(2)+" "+s[e];
	}

	function getXMLDocument(string) {
		var browser = navigator.appName;
		var xml;
		if (browser == 'Microsoft Internet Explorer') {
			xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = 'false'
			xml.loadXML(string);
		} else {
			xml = (new DOMParser()).parseFromString(string, 'text/xml');
		}
		return xml;
	}

	$(document).ready(function () {
	  $('#feed1').rssfeed('http://classifieds.occupy.net/rss/all/', {
	    limit: 3, 
	    header: false
	  });
	  $('#feed2').rssfeed('http://feeds.feedburner.com/interoccupy', {
	    limit: 3, 
	    header: false
	  });
	  $('#feed3').rssfeed('http://wearethe99percent.tumblr.com/rss', {
	    limit: 3,
	    date: false, 
	    header: false
	  });
	  $('#feed4').rssfeed('http://newswire.occupy.net/channel/368/rss.xml', {
	    limit: 3,
	    date: false, 
	    header: false
	  });
	  $('#feed5').rssfeed('http://forum.occupy.net/index.php?p=/categories/announcement/feed.rss', {
	    limit: 3,
	    date: false, 
	    header: false
	  });
	  $('#feed6').rssfeed('http://directory.occupy.net/occupations/added.rss', {
	    limit: 3,
	    date: false, 
	    header: false
	  });
	  $('#feed7').rssfeed('http://map.occupy.net/feed/', {
	    limit: 3,
	    date: false, 
	    header: false
	  });
	});
