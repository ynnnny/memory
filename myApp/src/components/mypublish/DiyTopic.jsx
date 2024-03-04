import { Input, View } from '@tarojs/components'
import React from 'react'
import './DiyTopic.css'


export default function DiyTopic(props) {

    const {diynumber,setDiynumber} = props;

    const shutBox = ()=>{
        setDiynumber(1);
    }

    const handleTopic = (evt)=>{
        console.log(evt.target.value);
    }

    const addTopic = ()=>{
        console.log("添加成功");
        setDiynumber(1)
    }

  return (
    <>
    <View className={diynumber===1?'notShow':'addTopic'}>
       <View className='shut' onClick={()=>shutBox()}>+</View>
        <View className='topicText'>请输入自定专题</View>
        <Input onInput={(event)=>handleTopic(event)}></Input>
        <View className='setTopic' onClick={()=>addTopic()}>ok</View>
    </View>
    </>
  )
}
