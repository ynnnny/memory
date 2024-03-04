import { Textarea, View } from '@tarojs/components'
import React, { useState } from 'react'
import './PublishFeel.css'

export default function PublishFeel() {
    const inistialText = "想留存什么记忆······"

    const [text,setText] = useState(inistialText)

    const inputFeel = (evt)=>{
        setText(evt.target.value);
    }

    const clearText = ()=>{
        if(text === inistialText){
            setText('');
        }
    }

    const returnText = ()=>{
        if(text.trim() === ""){
            setText(inistialText);
        }
    }

    const addPhoto = ()=>{
        console.log("添加图片");
    }

  return (
    <>
    <Textarea value={text} className='yourFeel' onFocus={()=>clearText()} onBlur={()=>returnText()} onInput={(event)=>inputFeel(event)}></Textarea>
            <View className='photoShow'>
                <View className='photo'></View>
                <View className='photo'></View>
                <View className='photo'></View>
                <View className='photo'></View>
                <View className='photo'></View>
                <View className='photo'></View>
                <View className='photo'></View>
                <View className='photo'></View>
                <View className='addphoto' onClick={()=>addPhoto}>
                    <View onClick={()=>addPhoto()}>+</View>
                </View>
            </View>
    </>
  )
}
