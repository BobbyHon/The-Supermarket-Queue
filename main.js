function queueTime(customers, n) {
    let time = 0
    let till = []
    while(customers.length || till.length){
      while (till.length != n && customers.length) {
        till.push(customers[0])
        customers.shift()
      }
      till = till.map((x) => x - 1)
      ++time
      while(till.includes(0)) till = till.slice(0, till.indexOf(0)).concat(till.slice(till.indexOf(0) + 1))
    }
    return time
  }