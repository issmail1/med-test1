var VERIFY_TOKEN = "mygame";
var PAGES = [
	// Add your pages here, change key for each one, I use numberical values starting at 0
    {
        id: "2484670611544717",
        name: "Med test1",
        key: "0",
        title: "It's a brand new day, let's continue our adventure!",
        subtitle: "Your Friends are playing...",
        cta: "Play Now",
        imageurl: "https://www.cmo4hire.com/wp-content/uploads/2016/10/Blog-background-hello-world.jpg",
        payload: null,
        pat: "EAAFl93tf2JQBAFqiSrFHlB3EhfKLKCVyh4EfDJzwz9ukOIobGnV3c41FiqFz0RLrKZBqMvZCaUP0ZA9XOx30uXIYE3ZCaJB6xtpfl3bUqTI8ZAxK8N4dfpDYE4dYNQflIaHQ1IUvXC7qkrBHMJVMTezo5TgmbZBzolvaR8PgUq4xCe33wNpKJi",
    },
	




 
];

function GetGame(page_id)
{
	for (var t = 0; t < PAGES.length; t++)
	{
		if (page_id === PAGES[t].id)
			return PAGES[t];
	}
}

function GetPage(which)
{
	return PAGES[which];
}

function GetVertifyToken()
{
	return VERIFY_TOKEN;
}

module.exports = 
{
	GetGame,
	GetPage,
	GetVertifyToken,
};
