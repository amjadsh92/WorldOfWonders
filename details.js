let worldWonder = localStorage.getItem('worldWonder')

if (worldWonder) {
  worldWonder = JSON.parse(worldWonder)
  // You can use userData here...
} else {
  console.log('User data not found in local storage')
}


const title = document.getElementsByTagName("h2")['0']
title.innerHTML = worldWonder.name

const mainContent = document.getElementsByClassName("page")[0]
const image =  document.createElement("img")
image.setAttribute("src", worldWonder.links.images[1])
image.setAttribute("class","image-page")
mainContent.appendChild(image)
const summary = document.createElement("h3")
summary.setAttribute("class", "summary" )
summary.innerHTML = worldWonder.summary
mainContent.appendChild(summary)

const informationSection = document.createElement("div")
informationSection.setAttribute("class", "information-section flex row space-between")

const locat = document.createElement("span")
locat.setAttribute("class", "information" )
locat.innerHTML = "Location: " + worldWonder.location

informationSection.appendChild(locat)

const timePeriod = document.createElement("span")
timePeriod.setAttribute("class", "information" )
timePeriod.innerHTML = "time period: " + worldWonder.time_period

informationSection.appendChild(timePeriod)

const buildYear = document.createElement("span")
buildYear.setAttribute("class", "information" )
buildYear.innerHTML = "BuildYear: " + worldWonder.build_year

informationSection.appendChild(buildYear)

mainContent.appendChild(informationSection)



