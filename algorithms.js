// 기초 정령 알고리즘

/*
1. 퀵정렬
2. 버블정렬
3. 선택정렬
4. 합병정렬
5. 삽입정렬
*/


 var num = [1,2,3,4,5,6,7,8,9,10];

 // 스왑 헬퍼 ==> 배열의 위치를 바꾼다.
 function swap(arr,index1,index2){
   var temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
 }

 // 1.퀵정렬
 // 퀵 정렬은 분할 정복 방법과 재귀를 통해 리스트를 정렬한다.
/*
 퀵 정렬(quick sort) 알고리즘의 개념 요약
‘찰스 앤터니 리처드 호어(Charles Antony Richard Hoare)’가 개발한 정렬 알고리즘
퀵 정렬은 불안정 정렬 에 속하며, 다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬 에 속한다.
분할 정복 알고리즘의 하나로, 평균적으로 매우 빠른 수행 속도를 자랑하는 정렬 방법
합병 정렬(merge sort)과 달리 퀵 정렬은 리스트를 비균등하게 분할한다.
분할 정복(divide and conquer) 방법
문제를 작은 2개의 문제로 분리하고 각각을 해결한 다음, 결과를 모아서 원래의 문제를 해결하는 전략이다.
분할 정복 방법은 대개 순환 호출을 이용하여 구현한다.
과정 설명
리스트 안에 있는 한 요소를 선택한다. 이렇게 고른 원소를 피벗(pivot) 이라고 한다.
피벗을 기준으로 피벗보다 작은 요소들은 모두 피벗의 왼쪽으로 옮겨지고 피벗보다 큰 요소들은 모두 피벗의 오른쪽으로 옮겨진다. (피벗을 중심으로 왼쪽: 피벗보다 작은 요소들, 오른쪽: 피벗보다 큰 요소들)
피벗을 제외한 왼쪽 리스트와 오른쪽 리스트를 다시 정렬한다.
분할된 부분 리스트에 대하여 순환 호출 을 이용하여 정렬을 반복한다.
부분 리스트에서도 다시 피벗을 정하고 피벗을 기준으로 2개의 부분 리스트로 나누는 과정을 반복한다.
부분 리스트들이 더 이상 분할이 불가능할 때까지 반복한다.
리스트의 크기가 0이나 1이 될 때까지 반복한다.
*/
 function quickSort(arr){
   if (arr.length == 0 ) {
     return[];
   }

   var middle = arr[0];
   var len = arr.length;
   var left=[],right=[];

   for(var i =1; i<len;++i){
     if (arr[i]<middle) {
       left.push(arr[i]);
     }
     else {
       right.push(arr[i]);
     }
   }

   return quickSort(left).concat(middle,quickSort(right));
 }

// 2. 버블정렬
// 버블 정렬은 서로 이웃한 데이터들을 비교하여 가장 큰 데이터를 가장 뒤로 보내며
// 정렬하는 방식

function bubbleSort(arr){
  var len = arr.length;

  for(var outer = len; outer>1;-outer){
    for(var inner = 0; inner<outer;++inner){
      if(arr[inner]>arr[inner+1]){
        swap(arr,inner,inner+1);
      }
    }
  }
  return arr;
};

// 3. 선택정렬
// 선택 정렬은 정렬되지 않은 데이터들에 대해 가장 작은 데이터를 찾아 가장 앞의
// 데이터와 교환해나가는 방식
function selectionSort(arr){
  var len = arr.length;
  var min;

  for(var outer = 0; outer<length -1;++outer){
    min = outer;
    for(var inner = outer +1; inner<length; ++inner){
      if(arr[inner]<arr[min]){
        min = inner;
      }
    }
    swap(arr,outer,min);
  }
  return arr;
}

// 4.합병정렬
// 퀵정렬과 마찬가지로 분할 정복 알고리즘중 하나이다.
function mergeSort(arr){
  var len = arr.length;
  if(len == 1){
    return arr;
  }

  var middle = Math.floor(len/2);
  var left = arr.slice(0,middle);
  var right = arr.slice(middle,len);

  function merge(left,right){
    var result = [];

    while(left.length && right.length){
      if( left[0] <= right[0]){
        result.push(left.shift());
      }else{
        result.push(right.shift());
      }
    }

    while(left.length){
      result.push(left.shift());
    }

    while(right.length){
      result.push(right.shift());
    }

    return result;
  }

  return merge(mergeSort(left),mergeSort(right));
}

// 5.삽입정렬
// 삽입 정렬은 아직 정렬도지 않은 임의의 데이터를 이미 정렬된 부분의 적절한 위치에
// 삽입해 가며 정렬하는 방식
function insertionSort(arr){
  var len = arr.length;
  var temp,inner;

  for(var outer = 1; outer<len;++outer){
    temp = arr[outer];
    inner = outer;

    while(inner > 0 && arr[inner -1] >= temp){
      arr[inner] = arr[inner -1];
      --inner;
    }

    arr[inner]=temp
  }
  return arr;
}

console.log(quickSort(num.slice()));
console.log(bubbleSort(num.slice()));
console.log(selectionSort(num.slice()));
console.log(mergeSort(num.slice()));
console.log(insertionSort(num.slice()));
