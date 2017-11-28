/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, 
and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title 
(both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . 
Also make any necessary adjustments to make this app accessible. */

function getDataFromApi(artist, title, callback) 
{
  //your code here
}

function displaySearchData(data) 
{
  //your code here
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

  	if(artist && song != undefined)
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