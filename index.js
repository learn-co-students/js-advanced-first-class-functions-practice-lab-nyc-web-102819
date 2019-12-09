const logDriverNames = function (drivers) {
   for (const driver of drivers) {
       console.log(driver.name);
   } 
}

const logDriversByHometown = function (drivers, search) {
    let newDrivers = drivers.filter(driver => search === driver.hometown);
    for (const driver of newDrivers) {
        console.log(driver.name);
    }
}

const driversByRevenue= function (drivers) {
    return drivers.slice().sort((a, b) => (a.revenue > b.revenue) ? 1 : -1);
}

// const driversByRevenue = function (drivers) {
//     return drivers.slice().sort(function (driverOne, driverTwo) {
//       return driverOne.revenue - driverTwo.revenue;
//     });
//   };

const driversByName = function (drivers) {
    return drivers.slice().sort((a, b) => (a.name > b.name) ? 1 : -1)
}

const totalRevenue = function (drivers) {
    const reducer = function (agg, el, i, arr) {
        return agg + el.revenue;
    }
    return drivers.reduce(reducer, 0);
}

const averageRevenue = function (drivers) {
    return totalRevenue(drivers) / drivers.length;
}
