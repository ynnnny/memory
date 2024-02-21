import { Image, View } from '@tarojs/components'
import React from 'react'
import './ToolMemory.css'
import centerImage from '../../../assets/common/个人中心图标@3x.png'
import Taro from '@tarojs/taro'


export default function ToolMemory() {

  const toCenter = ()=>{
    console.log("进入个人中心");
    Taro.navigateTo({
      url: '/pages/personal/index',
    });
  }

  return (
    <>
    <View className='toolMemory'>
      <Image onClick={()=>toCenter()} className='centerlogo' src={centerImage}></Image>
    </View>
    </>
  )
}
