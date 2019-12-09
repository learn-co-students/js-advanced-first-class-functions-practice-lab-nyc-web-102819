// Code your solution in this file!
const logDriverNames = function (drivers) {
    return drivers.filter(function (driver) {
        return console.log(`${driver.name}`);
    });
}

const logDriversByHometown = function (drivers, hometown) {
    return drivers.filter(function (driver) {
        if ( driver.hometown === hometown ) {
            return console.log(`${driver.name}`);
        };
    });
}

let driversByRevenue = function (drivers) {
    return drivers.slice().sort(function (drivera, driverb) {
        return drivera.revenue - driverb.revenue;
    });
}

let driversByName = function (drivers) {
    return drivers.slice().sort(function (drivera, driverb) {
        return drivera.name.localeCompare(driverb.name);
    });
}

let totalRevenue = function (drivers) {
    return drivers.reduce(function (total, driver) {
        return driver.revenue + total;
    }, 0);
}

let averageRevenue = function (drivers) {
    return totalRevenue(drivers) / drivers.length;
}