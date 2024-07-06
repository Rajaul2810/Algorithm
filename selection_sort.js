function selection_sort(arr){
    let temp;
    for(let i=0;i<arr.length-1;i++){
        let min_index = i;
        for(let j=i+1; j<arr.length;j++){
            if(arr[j]<arr[min_index]){
                min_index = j;
            }
        }
        if(min_index != i){
            temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp
        }
    }
    return arr
}

console.log(selection_sort([10,5,2,8,7]))