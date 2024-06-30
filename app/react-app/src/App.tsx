import React from 'react';
import logo from './logo.svg';
import c105 from './105.svg';
import './App.css';
// import {View, Text, TouchableOpacity} from 'react-native';

function App() {
// 計算とかの処理
  const a:number = 1;
  console.log(a);
  // ダイアログ表示
  // window.alert(a);
  // q:window.alert()とは？
  // a:ダイアログボックスを表示するメソッド
  // q:このダイアログは閉じるまで他の処理を制限する？
  // a:閉じるまで他の処理を制限する
  
  // 画像をクリックしたときに実行される関数
  const handleClick = () => {
    // ダイアログを表示
    alert('105');
  }
  
  return (
    // HTML
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <p>ああああ</p>
        git練習用
        
        {/* onClickイベントハンドラを使用して、画像がクリックされたときにhandleClick関数を呼び出す  */}
        <img 
          src = {c105}
          className="Class105"
          alt=""
          onClick={handleClick}
        />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Appとしてエクスポート（他のファイルで使えるようにする）
export default App;
