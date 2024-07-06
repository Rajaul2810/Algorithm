function bubble_sort(arr){
    let temp;
    let n = arr.length
    for(let i =0; i<n; i++){
        for(let j=0; j < n-i-1; j++){
            if(arr[j]> arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
    
}
console.log(bubble_sort([10,5,2,8,7]));