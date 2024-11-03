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
    worldWonderSection.setAttribute("class", "flex wrap worldWonder-section");

    worldWonders.forEach((worldWonder) => {
    const worldWonderCard = document.createElement("div")
    worldWonderCard.setAttribute("class", "flex column worldWonder-card full-width center solid-border grey-bg")
    const title = document.createElement("h3")
    title.setAttribute("class", "bold")
    title.innerHTML= worldWonder.name
    const image = document.createElement("img");
    image.setAttribute("src", worldWonder.links.images[0])
    const buttonSection = document.createElement("div")
    buttonSection.setAttribute("class", "button-section flex row wrap space-evenly center")
    
    
    wikiLink = document.createElement("a")
    wikiLink.setAttribute("href", worldWonder.links.wiki)
    const wiki = document.createElement("button")
    wiki.setAttribute("class", "btn")
    wiki.innerHTML = "wiki"
    wikiLink.appendChild(wiki)
    buttonSection.appendChild(wikiLink)

    const britannicaLink = document.createElement("a")
    britannicaLink.setAttribute("href", worldWonder.links.britannica)
    const britannica = document.createElement("button")
    britannica.setAttribute("class", "btn")
    britannica.innerHTML = "britannica"
    britannicaLink.appendChild(britannica)
    buttonSection.appendChild(britannicaLink)

    tripLink = document.createElement("a")
    tripLink.setAttribute("href", worldWonder.links.trip_advisor)
    const trip = document.createElement("button")
    trip.setAttribute("class", "btn")
    trip.innerHTML = "trip advisor"
    tripLink.appendChild(trip)
    buttonSection.appendChild(tripLink)
    //const britannica = document.createElement("button")

    
    const details = document.createElement("button")
    details.addEventListener("click", () => {
        window.open("details.html", "_blank");
        localStorage.setItem("worldWonder", JSON.stringify(worldWonder))
        //localStorage.setItem("worldWonderSummery", worldWonder.summary)
        //localStorage.setItem("worldWonderLocation", worldWonder.location)
        //localStorage.setItem("worldWonderBuildyear", worldWonder.build_year)
        //localStorage.setItem("worldWonderTimeperiod", worldWonder.time_period)
        //localStorage.setItem("worldWonderImage", worldWonder.links.images[0])


    })
    details.setAttribute("class", "btn")
    details.innerHTML = "show details"
   
    buttonSection.appendChild(details)

    

    worldWonderCard.appendChild(title)
    worldWonderCard.appendChild(image)
    worldWonderCard.appendChild(buttonSection)
    worldWonderSection.appendChild(worldWonderCard);

    body.appendChild(worldWonderSection)
   })

}


worldWonderCards()




