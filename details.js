let worldWonder = localStorage.getItem('worldWonder')

if (worldWonder) {
  worldWonder = JSON.parse(worldWonder)
  // You can use userData here...
} else {
  console.log('User data not found in local storage')
}


const title = document.getElementsByTagName("h2")['0']
title.innerHTML = worldWonder.name

const summary = document.getElementsByTagName("h3")['0']
summary.innerHTML = worldWonder.summary



