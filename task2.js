/*let someData: Array<number> = [70, 20, 3, 4, 1, 90];
let numberComparator: Comparator<number> = (obj1: number, obj2: number) =>
    {
        let x: number = obj1 as number;
        let y: number = obj2 as number;
        return x - y;
    }
    interface Comparator<Any> {
        compare(obj1: number, obj2: number): number;
    }
    
    function selectionSort<Type>(data: Array<Type>, compare: Comparator<Type>) {
        console.log(compare.compare);
    }

selectionSort<number>(someData, numberComparator); */
/*interface Comparator {
        (obj1: Type, obj2: Type): number;
    }
let numberComparator: Comparator = (obj1: number, obj2: number) => {
    let x: number = obj1 as number;
    let y: number = obj2 as number;
    if (x < y) {
        return y;
    }
};*/
var NumberComparator = function (obj1, obj2) {
    var x = obj1;
    var y = obj2;
    if (x < y) {
        return x;
    }
    else {
        return y;
    }
};
function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                // Choose the lesser of the two:
                if (NumberComparator(arr[j], arr[min]) !== undefined) {
                    min = j;
                }
                // min = j;
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
var someData = [70, 20, 3, 4, 1, 90];
selectionSort(someData);
