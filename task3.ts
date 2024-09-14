class Point {
    x: number;
    y: number;
    name:string;
    constructor(x: number, y:number, name: string) {
        this.x = x;
        this.y = y;
        this.name = name;
      }
}

class Pet {
    name: string;
    nickname: string;
    age: number;
    species: string;
    sleeping: boolean;
}
let points: Point[] = [
    { x: 2, y: 2, name: "point1" },
    { x: 3, y: 3, name: "point3" },
    { x: 1, y: 1, name: "point2" },
];
let pets: Pet[] = [
    { name: "Princeton", nickname: "Prince", age: 10, species: "dog", sleeping: false },
    { name: "Gramby", nickname: "Gramby", age: 5, species: "dog", sleeping: true },
    { name: "Scamper", nickname: "Scamper", age: 8, species: "cat", sleeping: false },
];
interface Comparator<Type> {
    (obj1: any, obj2: any): any;
}
let ObjectComparator:Comparator<any> = function(obj1:any,obj2:any) {
    if (obj1.name < obj2.name) {
        return obj1;
    } else {
        return obj2;
    }
  }
function selectionSort<Type>(arr: Array<any>) {
    for(let i = 0; i < arr.length - 1; i++)
    {
        let min = i;
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[j].name < arr[min].name)
            {
                // Choose the lesser of the two:
                if (ObjectComparator(arr[j], arr[min]) !== undefined) {
                    min = j;
                }
                // min = j; ObjectComparator(arr[j], arr[min])
            }
            //NumberComparator(arr[j], arr[min]);
        }
        // In-place swap:
        const tmp = arr[min];
        arr[min] = arr[i];
        arr[i] = tmp;
    }
    console.log(arr);
}
//selectionSort(points);
selectionSort(points);
selectionSort(pets);