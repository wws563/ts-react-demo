//import React, { Component } from 'react';
//import React from 'react';
import Comment from '../components/comment'
// import { test } from './api/index' // mockjs


// 定义prop类型
interface CommentProps {
	author: {
	  avatarUrl:string,
	  name:string
	},
	text:string,
	date:Date
  }
// prop实例
let commentObj:CommentProps = {
	author: {
	  avatarUrl:"http://fightclub.myds.me:10000/content/images/users/fux/av_1609818634.jpg",
	  name:"name"
	},
	text:"jieshao",
	date:new Date()
  }



function App() {
    return (
        <div className="App">
            <header className="App-header">
              <Comment {...commentObj}/>
            </header>
        </div>
    );
}

export default App;
