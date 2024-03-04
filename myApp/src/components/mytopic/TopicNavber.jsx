import { Image, View } from '@tarojs/components'
import React from 'react'
import './TopicNavber.css'
import lajitongImage from '../../assets/mytopic/垃圾桶@2x.png'
import zu119Image from '../../assets/mytopic/组 119@2x.png'
import Taro from '@tarojs/taro'

export default function TopicNavber(props) {

    const {topicNumber,setTopicNumber,itemTopic} = props;

    const backTopic = ()=>{
        console.log("返回上一页");
        Taro.navigateBack();
    }

    const deleteTopic = ()=>{
        console.log("删除专题");
        setTopicNumber(0);
    }

  return (
    <>
    <View className='topicnavber'>
        <Image className='zu119' src={zu119Image} onClick={()=>backTopic()}></Image>
        <View className='album'>{itemTopic.topicName}</View>
        <Image className='lajitong' src={lajitongImage} onClick={()=>deleteTopic()}></Image>
    </View>
    </>
  )
}
