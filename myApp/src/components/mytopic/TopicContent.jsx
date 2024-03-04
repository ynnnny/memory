import { Image, View } from '@tarojs/components'
import React from 'react'
import './TopicContent.css'
import backImage from '../../assets/mytopic/背景图@2x.png'
import blueImage from '../../assets/mytopic/蓝椭圆@2x.png'
import greenImage from '../../assets/mytopic/绿椭圆@2x.png'
import zu185Image from '../../assets/mytopic/组 185@2x.png'

export default function TopicContent() {

    const deleteContent = (index)=>{
        console.log("删除该感想");
    }

  return (
    <>
    <View className='topiccontent'>
        <Image className='background' src={backImage}></Image>
        <Image className='blue' src={blueImage}></Image>
        <Image className='green' src={greenImage}></Image>
        <View className='contentDisplay'>
            <View className='content'>
                <Image onClick={(index)=>deleteContent(index)} className='deletecontent' src={zu185Image}></Image>
                <View className='feelContent'>感想</View>
            </View>
            <View className='content'>
            <Image onClick={(index)=>deleteContent(index)} className='deletecontent' src={zu185Image}></Image>
                <View className='feelContent'>感想</View>
            </View>
            <View className='content'>
            <Image onClick={(index)=>deleteContent(index)} className='deletecontent' src={zu185Image}></Image>
                <View className='feelContent'>感想</View>
            </View>
            <View className='content'>
            <Image onClick={(index)=>deleteContent(index)} className='deletecontent' src={zu185Image}></Image>
                <View className='feelContent'>感想</View>
            </View>
        </View>
    </View>
    </>
  )
}
