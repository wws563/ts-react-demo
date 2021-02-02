//import React, { Component } from 'react';
//import React from 'react';
// import Comment from '../components/comment'
import Comment from '../components/comment'
import Clock from '../components/clock.js'
import FirstList from '../components/listAndKey.js'
import TestCss from '../assets/css/test.module.css';

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

let listData:number[] = [1,2,3]

function App() {
    return (
        <div className={"App " + TestCss.center}>
            <header className="App-header">
              <Comment {...commentObj}/>
			  <Clock />
			  {/* <FirstList listData={listData} /> */}
            </header>
        </div>
    );
}


export default App;
