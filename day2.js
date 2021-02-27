var number = function(busStops) {
    let peopleOnBus = 0;
    for (let i = 0; i < busStops.length; i++) {
        peopleOnBus += busStops[i][0];
        peopleOnBus -= busStops[i][1];
    }
    return peopleOnBus;
}
