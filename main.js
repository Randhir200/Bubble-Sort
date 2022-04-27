function bubbleSort(N,arr){
    for(var i=0;i<N;i++){
        for(var j=0;j<N-i-1;j++){
            if(arr[j+1]<arr[j]){
                swap(arr,j,j+1);
            }
        }
    }
    console.log(arr);
}
var arr = [3,8,5,1,2]
bubbleSort(arr.length, arr);

function swap(arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
