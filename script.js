const items = [
  {id:1, title: "item 1", cost : 10},
  {id:2, title: "item 2", cost : 20},
  {id:3, title: "item 3", cost : 15},
  {id:4, title: "item 4", cost : 25}

]

const itemListContainer = document.querySelector("#itemList")
const averageCostContainer = document.querySelector("#averageCost")
const totalCostContainer = document.querySelector("#totalCost")

const itemList = items.reduce((acc,curr) => {
  acc.totalCost = acc.totalCost + curr.cost 

  const listItem = document.createElement('li')
  listItem.textContent = `
  ${curr.title} - Cost : $${curr.cost}`
  itemListContainer.appendChild(listItem)

  return acc;

},{totalCost: 0})


const averageCost = (itemList.totalCost / items.length)
averageCostContainer.textContent = averageCost
totalCostContainer.textContent = `total Cost : $${itemList.totalCost}`