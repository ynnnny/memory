import { Image, View } from '@tarojs/components'
import React from 'react'
import './Pernavber.css'
import homeImage from '../../assets/personal/主页图标@2x.png'
import juxing61Image from '../../assets/personal/矩形 61@2x.png'
import Taro from '@tarojs/taro'

export default function Pernavber() {

    const backHome = () =>{
        Taro.navigateBack()
    }

  return (
    <>
        <View className='pernavber'>
            <Image className='juxing61' src={juxing61Image}></Image>
            <Image onClick={()=>backHome()} className='home' src={homeImage}></Image>
        </View>
    </>
  )
}
