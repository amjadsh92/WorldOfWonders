const fetchWorldWonders = async () => {
    const response = await fetch("https://www.world-wonders-api.org/v0/wonders")
    const data = await response.json();
    console.log(data[0].links.images[0]);
    
    return data

};


const worldWonderCards = async () => {

    let worldWonders = await fetchWorldWonders()
    worldWonders = worldWonders.slice(0,10)
    //console.log(worldWonders)
    const body = document.body; 
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    worldWonders.forEach((worldWonder) => {

    const image = document.createElement("img");
    image.setAttribute("src", worldWonder.links.images[0])
    wrapper.appendChild(image);
    body.appendChild(wrapper)





        



    })

}


worldWonderCards()




