var N = +readline();
var rooms = {};


// { id: '0', money: 200, door1: 'E', door2: 'E', total: 0 }
function Room(id, money, door1, door2) {
    this.id = id;
    this.money = money;
    this.door1 = door1;
    this.door2 = door2;
    this.total = 0;
}

for (var i = 0; i < N; i++) {
    var room = readline();
    var values = room.split(' ');
    
    // insert obj
    rooms[values[0]] = new Room(values[0], +values[1], values[2], values[3]);
}

// Check if dont E
function doorCheckE(door) {
    return door !== 'E';
}

// door , m = memory
function seek(door, m) {
    var room = rooms[door];

    // cehck if total room > m
    if (room.total > m)
        return 0;
    
    room.total = m;
    
    //Pick the next room with highest sum 
    var BestPriceSum = Math.max(
        doorCheckE(room.door1) ? seek(room.door1, m + room.money) : 0,
        doorCheckE(room.door2) ? seek(room.door2, m + room.money) : 0);
    
    return room.money + BestPriceSum;
}

print(seek('0', 0));
