// Image switcher code

let myImage = document.querySelector('img'); // オブジェクトを代入
//documentは組み込み式のオブジェクト
//ブラウザが表示しているページ、DOHとも呼ぶ。Document Object Modelの略。
//querySelectorはページの一部(HTML要素)を選ぶ関数。


myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  //promptは組み込み式の関数。 prompt Windowを表示して、ユーザ入力をさせる。
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    // 入力データを特別な場所に保存する
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() { // ボタンをクリックしたら
  setUserName(); 
}
