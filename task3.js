var Point = /** @class */ (function () {
    function Point(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
    }
    return Point;
}());
var Pet = /** @class */ (function () {
    function Pet() {
    }
    return Pet;
}());
var points = [
    { x: 2, y: 2, name: "point1" },
    { x: 3, y: 3, name: "point3" },
    { x: 1, y: 1, name: "point2" },
];
var pets = [
    { name: "Princeton", nickname: "Prince", age: 10, species: "dog", sleeping: false },
    { name: "Gramby", nickname: "Gramby", age: 5, species: "dog", sleeping: true },
    { name: "Scamper", nickname: "Scamper", age: 8, species: "cat", sleeping: false },
];
var ObjectComparator = function (obj1, obj2) {
    if (obj1.name < obj2.name) {
        return obj1;
    }
    else {
        return obj2;
    }
};
function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j].name < arr[min].name) {
                // Choose the lesser of the two:
                if (ObjectComparator(arr[j], arr[min]) !== undefined) {
                    min = j;
                }
                // min = j; ObjectComparator(arr[j], arr[min])
            }
            //NumberComparator(arr[j], arr[min]);
        }
        // In-place swap:
        var tmp = arr[min];
        arr[min] = arr[i];
        arr[i] = tmp;
    }
    console.log(arr);
}
//selectionSort(points);
selectionSort(points);
selectionSort(pets);
