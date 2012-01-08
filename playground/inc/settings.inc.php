<?php

$settings = array(
	'urlData' => 'http://news.occupy.net'
);

$channels = array();
$feeds = array();

# Channels to appear on the front page

$channels[] = array(
	'node' => 157,
	'name' => 'General Assembly',
	'desc' => 'Meeting notes from GA\'s around the world',
);

$channels[] = array(
	'node' => 277,
	'name' => 'Featured News',
	'desc' => 'Curated stories from the occupy movement',
);

$channels[] = array(
	'node' => 278,
	'name' => 'Events',
	'desc' => 'Stories about events from the occupy movement',
);

$channels[] = array(
	'node' => 196,
	'name' => 'Direct Action',
	'desc' => 'Stories dealing with Direct Action',
);

$channels[] = array(
	'node' => 66,
	'name' => 'Arts &amp; Culture',
	'desc' => 'Occupy arts &amp; culture stories',
);

$channels[] = array(
	'node' => 198,
	'name' => 'Technology',
	'desc' => 'Stories dealing with occupy technology',
);

$channels[] = array(
	'node' => 208,
	'name' => 'Documentation',
	'desc' => 'Direct documentation from the occupy movement',
);

# Feeds (raw) to appear on the front page

$feeds[] = array(
	'node' => 'all',
	'name' => 'All Raw Feeds',
	'desc' => 'Stories from around the Occupied world, unfiltered.',
);

$feeds[] = array(
	'node' => '80',
	'name' => 'Occupy Wall Street',
	'desc' => 'Feed of the New York General Assembly of #OWS',
);

$feeds[] = array(
	'node' => '100',
	'name' => 'Occupy Atlanta',
	'desc' => '',
);

$feeds[] = array(
	'node' => '116',
	'name' => 'Occupy Austin',
	'desc' => '',
);

$feeds[] = array(
	'node' => '81',
	'name' => 'Occupy Chicago',
	'desc' => '',
);

$feeds[] = array(
	'node' => '97',
	'name' => 'Occupy DC',
	'desc' => '',
);

$feeds[] = array(
	'node' => '108',
	'name' => 'Occupy New Orleans',
	'desc' => '',
);

$feeds[] = array(
	'node' => '136',
	'name' => 'Occupy Oakland',
	'desc' => '',
);

$feeds[] = array(
	'node' => '95',
	'name' => 'Occupy Philly',
	'desc' => '',
);

$feeds[] = array(
	'node' => '144',
	'name' => 'Occupy San Francisco',
	'desc' => '',
);

?>