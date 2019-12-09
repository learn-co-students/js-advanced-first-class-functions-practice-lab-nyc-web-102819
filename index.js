// Code your solution in this file!
function logDriverNames(drivers){
    drivers.forEach(element => console.log(element.name)) 
}

const logDriversByHometown = function (drivers, hometown){
    drivers.forEach(function (driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name)
        }
    })
}

const driversByRevenue = function (drivers){
    return drivers.slice().sort(function (driverONE,driverTwo){
        return (driverONE.revenue - driverTwo.revenue)
    })
}
const driversByName = function(drivers){
    return drivers.slice().sort(function (driverONE,driverTwo){
        return driverONE.name.localeCompare(driverTwo.name)

    })
}

const totalRevenue = function (drivers) {
    return drivers.reduce(function (total, currentDriver) {
      return currentDriver.revenue + total;
    }, 0);
  };

function averageRevenue(drivers){
    return (totalRevenue(drivers) / drivers.length)
}