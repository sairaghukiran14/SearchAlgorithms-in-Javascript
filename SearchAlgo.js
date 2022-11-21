// Linear Search in Javascript
// In Linear Search , a value is searched in order of their indexes 
// Search s tarts from index value 0 to the last index Value x.

var array0 = [12,43,2,4,11,56,88,54,87,23,10];

// Here num is value to be searched
function linearsearch(num){
    for(i=0;i<array0.length;i++)
    {
        if(num === array0[i])
        {
            return i;
        }
    }
    return -1;
}

linearsearch(12);//returns 0
linearsearch(88);//returns 6

// ------------------------------------------------------------------------------------------------------------

// Binary Search in Javscript
// For Binary search , The given array should be Sorted Array.

var array1 = [0,1,2,3,4,5,6,7,8,9,10];

function binarysearch(val,arr)
{
let lower = 0;
let upper = arr.length - 1;

// This gives the middle Number of the array
while(lower <= upper)
{
    const middle = lower + Math.floor((upper-lower)/2);
    if(val == arr[middle])
    {
        return middle;
    }
    if(val < arr[middle])
    {
        upper = middle - 1;// This statement makes lower to 0 and upper to 4 and loop goes on
    }else{
        lower = middle + 1;// This statement makes lower to 6 and upper to 10 and loop goes on
    }
}
return -1;
}

binarysearch(9,array1);// returns 9
binarysearch(4,array1);// returns 4
