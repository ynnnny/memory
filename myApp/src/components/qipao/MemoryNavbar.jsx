import { View , Text, Image } from '@tarojs/components'
import React from 'react'
import './MemoryNavbar.css'
import juxing61Image from '../../assets/qipao/矩形 61@2x.png'
import zu120Image from '../../assets/qipao/组 120@2x.png'
import jiahao2Image from '../../assets/qipao/加号@2x.png'
import rubbishImage from '../../assets/qipao/垃圾桶@2x.png'
import Taro from '@tarojs/taro'

export default function MemoryNavbar(props) {

  const {deletenumber,setDeletenumber} = props

  const backCommon = ()=>{
    console.log("返回上一页");
    Taro.navigateBack();
  }

  const publishMemory = () =>{
    console.log("发布记忆");
    Taro.navigateTo({
      url: '/pages/publish/index'
    })
  }

  const deleteMemory = () =>{
    console.log("删除记忆");
    setDeletenumber(0);
  }

  return (
    <>
        <View className='memoryNavbar'>
            <Image className='juxing61' src={juxing61Image}></Image>
            <Image onClick={()=>backCommon()} className='zu120' src={zu120Image}></Image>
            <Image onClick={()=>publishMemory()} className='fabu' src={jiahao2Image}></Image>
            <Text>大理</Text>
            <Image onClick={()=>deleteMemory()} className='rubbish' src={rubbishImage}></Image>
        </View>
    </>
  )
}
