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

interface Comparator<Type> {
    (obj1: any, obj2: any): any;
}
let NumberComparator:Comparator<number> = function(obj1:number,obj2:number) {
    let x: number = obj1 as number; 
    let y: number = obj2 as number;
    if (x < y) {
        return x;
    } else {
        return y;
    }
  }
function selectionSort<Type>(arr: Array<Type>) {
    for(let i = 0; i < arr.length - 1; i++)
    {
        let min = i;
        
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[j] < arr[min])
            {
                // Choose the lesser of the two:
                if (NumberComparator(arr[j], arr[min]) !== undefined) {
                    min = j;
                }
                // min = j;
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
let someData: Array<number> = [70, 20, 3, 4, 1, 90];
selectionSort<number>(someData);