<?php

function buildFeedList($data,$title,$class,$channel = true,$wrapper = 'ul',$li = 'li')
{
	
	$out = "<$wrapper id=\"$title\" class=\"$class feedList\">" ;
	
	foreach($data as $id => $feedData)
	{
	
		$feedurl = buildFeedURL($feedData['node'],0,$channel);
		$feedRSS = buildFeedURL($feedData['node'],1,$channel);
	
		$out .= '<' . $li . ' id="' . $title . '_' . $id . '" class="' . $class_item . '">' ;
		$out .= '<a href="' . $feedurl . '" title="' . $feedData['desc'] . '" rss_url="' . $feedRSS . '" rss_title="' . $feedData['name'] . '" rss_desc="' . $feedData['desc'] . '" target="_blank">' . $feedData['name'] . '</a>';
		$out .= "</$li>";
	}
	
	$out .= "</$wrapper>" ;
	
	return $out;
}


// news.occupy.net/channel/157/rss.xml
// news.occupy.net/rss/100/rss.xml
function buildFeedURL($node,$rss = true,$channel = true)
{
	
	global $settings;
	
	if($rss)
	{
		//Build rss url
		if($channel)
		{
			$out = $settings['urlData'] . '/channel/' . $node . '/rss.xml' ;
		} else {
			$out = $settings['urlData'] . '/rss/' . $node . '/rss.xml' ;
		}
	} else {
		//Build manage news url
		if($channel)
		{
			$out = $settings['urlData'] . '/node/' . $node ;
		} else {
			$out = $settings['urlData'] . '/feeds/' . $node ;
		}
	}
	
	return $out;
}

function feedURL()
{

}

?>