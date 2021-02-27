/*Project that takes in an array of two-number arrays
the first number represents people entering the bus
the second number represents people leaving the bus

Goal: figure out how many people left on the bus at the end

number([[10,0], [15,8], [3,11]]) -> 28 people boarded, 19 people left, so 9 left on bus
*/

var number = function(busStops) {
    let peopleOnBus = 0;
    for (let i = 0; i < busStops.length; i++) {
        peopleOnBus += busStops[i][0];
        peopleOnBus -= busStops[i][1];
    }
    return peopleOnBus;
};

//console.log(number([[10, 0], [15, 8], [3, 11]]));
