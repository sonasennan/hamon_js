var array=[1,2,3,4,5,6,7,8,9,10,11,11,10];

// // function secondLargest()
// // {
// //     var sorted=array.sort((a,b)=>b-a);
// //     var secondLargest;
// //     secondLargest=sorted[1];
// //     console.log(secondLargest);
// // }

// // secondLargest()

// function secondLargest()
// {
//     var sorted=array.sort();
//     newArray=[];
//     for(var i=sorted.length-1;i>=0;i--)
//     {
//         newArray=newArray+sorted[i];
//     }
//     console.log(newArray);
//     var secondLargest;
//     secondLargest=newArray[1];
//     console.log(secondLargest);
// }
// secondLargest()\

function secondLargest()
{
    let uniqueSet=new Set(array);
    let uniqueArray=Array.from(uniqueSet);
    let reversedArray=uniqueArray.sort((a,b)=>b-a);
    console.log(reversedArray);
    console.log(reversedArray[1]);
}

secondLargest()




