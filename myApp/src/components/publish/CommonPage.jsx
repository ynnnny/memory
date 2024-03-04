import { View , Image, Input } from '@tarojs/components'
import React, { useState } from 'react'
import backgroundImage from '../../assets/publish/背景图@2x.png'
import PublishFeel from '../PublishFeel'
import './CommonPage.css'
import blueround from '../../assets/publish/蓝椭圆@2x.png'
import greenround from '../../assets/publish/绿椭圆@2x.png'

export default function CommonPage() {
  const inistialPlace = '输入地名'

  const [place,setPlace] = useState(inistialPlace);

  const inputPlace = (evt)=>{
    setPlace(evt.target.value);
  }

  const clearPlace = (evt)=>{
    if(place === inistialPlace){
      setPlace('')
    }
  }

  const returnPlace = ()=>{
    if(place.trim() === ''){
      setPlace(inistialPlace);
    }
  }

  return (
    <>
    <View className='commonPage'>
        <Image className='beijing' src={backgroundImage}></Image>
        <Image className='blue' src={blueround}></Image>
        <Image className='green' src={greenround}></Image>
        <View className='card'>
            <Input className='place' value={place} onFocus={()=>clearPlace()} onBlur={()=>returnPlace()} onInput={(event)=>inputPlace(event)}></Input>
           <PublishFeel/>
        </View>
    </View>
    </>
  )
}
