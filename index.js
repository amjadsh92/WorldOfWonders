const fetchWorldWonders = async () => {
    const response = await fetch("https://www.world-wonders-api.org/v0/wonders")
    const data = await response.json();
    console.log(data[0].links.images[0]);
    
    return data

};


const worldWonderCards = async () => {

    let worldWonders = await fetchWorldWonders()
    worldWonders = worldWonders.slice(0,10)
    const body = document.body; 
    const worldWonderSection = document.createElement("div");
    worldWonderSection.setAttribute("class", "worldWonder-section");

    worldWonders.forEach((worldWonder) => {

    const image = document.createElement("img");
    image.setAttribute("src", worldWonder.links.images[0])
    worldWonderSection.appendChild(image);
    body.appendChild(worldWonderSection)
   })

}


worldWonderCards()




