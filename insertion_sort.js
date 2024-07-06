function insertion_sort(arr){
    let item;
    for(let i =0; i<arr.length;i++){
        item = arr[i];
        let j= i-1;
        while(j>=0 && arr[j] >item ){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = item
    }
    return arr
}
console.log(insertion_sort([10,5,2,8,7]));