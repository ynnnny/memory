import React, { useState } from 'react'
import './MinePage.css'
import { Image, Text, Textarea, View } from '@tarojs/components'
import backgroundImage from '../../assets/mypublish/背景图@2x.png'
import PublishFeel from '../PublishFeel';

export default function CommonPage(props) {

    const {diynumber,setDiynumber} = props;


    const choseTopic = ()=>{
        setDiynumber(0);
    }

  return (
    <>
    <View className='commonPage'>
        <Image className='beijing' src={backgroundImage}></Image>
        <View className='card'>
            <PublishFeel/>
            <Text className='diytopic' onClick={()=>choseTopic()}>#自定专题</Text>
        </View>
    </View>
    </>
  )
}
