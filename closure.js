// 클로저
/* 클로저(closure) 내부함수가 외부함수의 맥락(context)에 접근할
수 있는 것을 가르킨다. 클로저는 자바스크립트를 이용한 고난이도의
테크닉을 구하사는데 필수적인 개념으로 활용된다.
*/

// 내부함수
function outter(){
  function inner(){
    var title = 'coding everybody';
    alert(title);
  }
  inner();
}
outter();

/*
함수 outter의 내부에는 함수 inner가 정의 되어 있다.
함수 inner를 내부 함수라고 한다.
내부함수는 외부함수의 지역변수에 접근할 수 있다.
아래의 예제를 보자
 */
function outter(){
  var title = "coding everybody";
  function inner(){
    alert(title);
  }
  inner();
}
outter();


/*
클로저(closure)는 내부함수와 밀접한 관계를 가지고 있는 주제다.
내부함수는 외부함수의 지역변수에 접근 할 수 있는데 외부함수의
실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의
변수에 접근 할 수 있다. 이러한  메커니즘을 클로저라고 한다.
아래의 예제는 이전의 예제를 조금 변형한 것 이다.
 */
function outter(){
  var title = "coding everybody";
  return function(){
    alert(title);
  }
}
var inner = outter();
inner();
/*
예제의 실행 순서를 주의깊게 살펴보자
46행에서 함수 outter를 호출하고 있다 그 결과 변수 inner에 담긴다
 */


function factory_movie(title){
  return {
    get_title : function(){
      return title;
    },
    set_title : function(_title){
      if (typeof _title === 'String') {
          title = _title
      }else {
        alert("제목을 문자열이야 합니다.");
      }
    }
  }
}
ghost = factory_movie("Ghost in the shell");
matrix = factory_movie("Matrix");
alert(ghost.get_title());
alert(matrix.get_title());
ghost.set_title('공각기동대');

alert(ghost.get_title());
alert(matrix.get_title());




/*
자주 접하는 오류
 */
var arr = [];
for (var i = 0; i < 5 i++) {
  arr[i] = function (){
    return i;
  }
}
for(var index in arr){
  console.log(arr[index]());
}

/*
수정안
 */
 var arr = [];
 for (var i = 0; i < 5 i++) {
   arr[i] = function(id){
     return function (){
       return id;
     }
  }(i);
}
 for(var index in arr){
   console.log(arr[index]());
 }
