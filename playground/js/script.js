/* Author: Drew Hornbein

*/

function myGetElementsByClassName(selector) {
    if ( document.getElementsByClassName ) {
        return document.getElementsByClassName(selector);
    }

    var returnList = new Array();
    var nodes = document.getElementsByTagName('div');
    var max = nodes.length;
    for ( var i = 0; i < max; i++ ) {
        if ( nodes[i].className == selector ) {
            returnList[returnList.length] = nodes[i];
        }
    }
    return returnList;
}

function convertSpecialChars(e) {
return e.replace("&amp;",'&').replace("&gt;",'>').replace("&lt;",'<').replace("&quot;",'"');
}

var rssReader = {
    containers : null,

    // initialization function
    init : function(selector) {
        containers = myGetElementsByClassName(selector);
        for(i=0;i<containers.length;i++){
            // getting necessary variables
            var rssUrl = containers[i].getAttribute('rss_url');
            var num = containers[i].getAttribute('rss_num');
            var id = containers[i].getAttribute('id');

            // creating temp scripts which will help us to transform XML (RSS) to JSON
            var url = encodeURIComponent(rssUrl);
            var googUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+num+'&q='+url+'&callback=rssReader.parse&context='+id;

            var script = document.createElement('script');
            script.setAttribute('type','text/javascript');
            script.setAttribute('charset','utf-8');
            script.setAttribute('src',googUrl);
            containers[i].appendChild(script);
        }
    },

    // parsing of results by google
    parse : function(context, data) {
        var container = document.getElementById(context);
        container.innerHTML = '';

        // creating list of elements
        var mainTitle = document.createElement('div');
				mainTitle.setAttribute('class','feedTitle');
				
				// Feed meta data
				var feedText = document.createTextNode(convertSpecialChars(data.feed.title));
				var feedLink = document.createTextNode(data.feed.link);
				var feedDescText = document.createTextNode(data.feed.description);

				// feed title & link
				var feedLink = document.createElement('a');
				feedLink.setAttribute('href', feedLink);
				feedLink.setAttribute('target','_blank');
				feedLink.setAttribute('class','feedTitleLink');
				feedLink.appendChild(feedText);				
				// add link to feed meta
				mainTitle.appendChild(feedLink);
				
				// feed description
				var feedDesc = document.createElement('p');
				feedDesc.appendChild(feedDescText);
				// add description to feed meta
				mainTitle.appendChild(feedDesc);
				
				// add meta data to main container
        //container.appendChild(mainTitle);

        // creating list of elements
        var mainList = document.createElement('ul');

        // also creating its childs (subitems)
        var entries = data.feed.entries;
        for (var i=0; i<entries.length; i++) {
            var listItem = document.createElement('li');
            var title = convertSpecialChars(entries[i].title);
            var linkURL = entries[i].link;
						var location = linkURL.split('//').pop().split('/').shift();
            var contentSnippet = entries[i].contentSnippet;
            var contentSnippetText = document.createTextNode(contentSnippet);
            var content = entries[i].content;
						var readMoreText = document.createTextNode('Read full article...');
						var publishedDate = document.createTextNode(entries[i].publishedDate.substring(0,22));
						
						// article Link
            var link = document.createElement('a');
            link.setAttribute('href', linkURL);
            link.setAttribute('target','_blank');
            link.setAttribute('class','title');
            var text = document.createTextNode(title);
            link.appendChild(text);
            // add link to list item
            listItem.appendChild(link);
						
						// date
						var date = document.createElement('div');
						date.setAttribute('class','date');
						date.appendChild(publishedDate);
						// add date to list item
						listItem.appendChild(date);

						// description
            var desc = document.createElement('p');
            desc.setAttribute('class','desc');
						desc.innerHTML = content;
						//add read more link
						var descLink = document.createElement('a');
            descLink.setAttribute('href', linkURL);
            descLink.setAttribute('target','_blank');
            descLink.setAttribute('class','readMore');
						descLink.appendChild(readMoreText);
						desc.appendChild(document.createElement('br'));
            desc.appendChild(descLink);
						// add description to list item
            listItem.appendChild(desc);
						
						// add tags
						var tags = data.feed.entries.categories;
						if ( tags && tags.length > 0 ) {
							
							var tagList = document.createElement('ol');
							
							for (var i=0; i<tags.length; i++) {
								var tagListItem = document.createElement('li');
								var tag = tags[i];
								var tagText = document.createTextNode(tag);
								
								// add tag text to li
								tagListItem.appendChild(tagText);
								// add list item to tag list
								tagList.appendChild(tagListItem);
							}
							//add tag list to list item
							listItem.appendChild(tagList);
						}			
						
						// location (URL of feed)
						var loc = document.createElement('a');
            loc.setAttribute('href', 'http://' + location);
            loc.setAttribute('target','_blank');
            loc.setAttribute('class','loc');
						var locText = document.createTextNode(location);
            loc.appendChild(locText);
            // add location to list item
            listItem.appendChild(loc);
						

            // adding list item to main list
            mainList.appendChild(listItem);
        }
        container.appendChild(mainList);
    }
};

window.onload = function() {
    rssReader.init('post_results');
}

$(document).ready(function() {
	
	var currentWidth = $('#main').outerWidth() - $('#newsNav').outerWidth() - 300;
	
	$('#mainContent .lt-col').width(currentWidth);
	
	$(window).resize(function() {
		$('#mainContent .lt-col').css('width','');
	});
	
	$('#newsNav a').click(function() {
	
		var rss_url = $(this).attr('rss_url');
		var rss_title = $(this).attr('rss_title');
		var rss_desc = $(this).attr('rss_desc');
		var loadingHTML = '<div class="loading_rss"><img alt="Loading..." src="img/loading.gif" /></div>';
		var currentWidth = $('#post_results_main').outerWidth();
		
		$('#newsNav a').removeClass('active');
		$(this).addClass('active');
		
		$('#mainContent .lt-col').width(currentWidth);
		$('#post_results_main').attr('rss_url',rss_url);
		$('#post_results_main').html(loadingHTML);
		
		$('#mainContent .headline .rssTitle').html(rss_title);
		$('#mainContent .headline .rssDesc').html(rss_desc);
		
		rssReader.init('post_results');
		
		
		return false;
	});
});






