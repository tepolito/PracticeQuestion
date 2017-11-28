/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, 
and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title 
(both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . 
Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) 
{
	console.log(`the artist and title in getData are ${artist}, ${title}`);
  $.ajax(
  {
  	type: 'GET',
  	url: "https://api.lyrics.ovh/v1/artist/title",
  	success: callback,

  	dataType: "json"
  })
}

function displaySearchData(data) 
{
	console.log(data);
  $('.js-search-results').append(data.lyrics);
}

function watchSubmit() 
{
  $('.js-search-form').submit(function (event)
  {
  	event.preventDefault();

  	let artist = $(event.currentTarget).find('.js-query-artist').val();
  	console.log(`the artist is ${artist}`);

  	let song = $(event.currentTarget).find('.js-query-title').val();
  	console.log(`the song is ${song}`);

  	if(artist != false && song != false)
  	{
  		getDataFromApi(artist,song,displaySearchData);
  	} 
  	else
  	{
  		alert('enter the values please');
  	}
  })
}

$(watchSubmit);