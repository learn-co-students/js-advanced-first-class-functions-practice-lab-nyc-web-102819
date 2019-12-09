// Code your solution in this file!
const logDriverNames = function(drivers) {
    const cbfunct = function(item) {
        console.log(item.name)
    }
    drivers.forEach(cbfunct)
}
const logDriversByHometown = function (drivers, location) {
    const myHelper = function (driver) {
        if (driver.hometown === location) {
            console.log(driver.name)
        }
    }
    drivers.forEach(myHelper)
}

let driversByRevenue = function(drivers) {
    let ascendingOrder = function(a, b) {
        return a.revenue - b.revenue
    }
    return [...drivers].sort(ascendingOrder)
}

let driversByName = function(drivers) {
    const compare = function(a,b) {
        return (a.name).localeCompare(b.name)
    }
    return [...drivers].sort(compare)
}

let totalRevenue = function(drivers) {
    let reducer = function(agg, driver) {
        return agg += driver.revenue
    }
    return drivers.reduce(reducer, 0)
}

let averageRevenue = function(drivers) {
    return totalRevenue(drivers) / drivers.length
}