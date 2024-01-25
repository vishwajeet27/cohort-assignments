/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = []
  if(transactions.length == 0){
    return [];
  }
  const dic  = {}
  for(let trans of transactions){
    if(trans.category in dic ){
      dic[trans.category] += trans.price;
    }else{
      dic[trans.category] = trans.price;
    }
  }

  for(let a in dic){
    ans.push({
      category :a,
      totalSpent : dic[a]
    })
  }
  return ans

}

module.exports = calculateTotalSpentByCategory;
