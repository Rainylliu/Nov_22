async function getRandomArtwork() {
	try {
	  const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=cat");
	  const data = await response.json();
  
	  const randomObjectID = data.objectIDs[Math.floor(Math.random() * data.objectIDs.length)];
  
	  const artworkResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectID}`);
	  const artworkData = await artworkResponse.json();
  
	  displayArtwork(artworkData);
	} catch (error) {
	  console.error(error);
	}
  }
  
  function displayArtwork(artwork) {
	document.getElementById("artworkTitle").textContent = artwork.title;
	document.getElementById("artworkImage").src = artwork.primaryImage;
	document.getElementById("artworkImage").alt = artwork.title;
	document.getElementById("artistDisplayName").textContent = artwork.artistDisplayName;
	document.getElementById("objectDate").textContent = artwork.objectDate;
  }
  
  window.onload = getRandomArtwork;
  