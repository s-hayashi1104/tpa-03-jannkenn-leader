function quickSort(start, end){
    const pivot = array[Math.floor((start + end)/2)];
    let left = start;
    let right = end;

    while(true){
        while(araray[left]<pivot){
            left++;
        }
        while(pivot<array[right]){
            right--;
        }
        if(right <= left){
            break;
        }
        //rightとrightの値がぶつかっていない場合、leftとrightを交換
        //交換後にleftを後ろへ、rightを前へ一つ移動する
        let tmp =array[left];
        array[left] =array[right];
        array[right] =tmp;
        left++;
        right--;
    }
    //左側に分割できるデータがある場合、quickSort関数を呼び出して再帰的に処理を繰り返す。
    if(start < left-1){
        quickSort(start,left-1);
    }
    //右側に分割できるデータがある場合、quickSort関数を呼び出して再帰的に処理を繰り返す。
    if(right+1 < end){
        quickSort(right+1,end);
    }
}

module.exports = quickSort;
