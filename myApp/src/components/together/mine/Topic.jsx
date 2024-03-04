import { View , Text} from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import './Topic.css'
import Taro from '@tarojs/taro'


export default function Topic() {

    const [topicList,setTopicList] = useState([]);

    useEffect(() => {
        const newTopicList = [{
            topicName: "一",
            topicFeeling: [],
        },{
            topicName: "二",
            topicFeeling: [],
        },{
            topicName: "三",
            topicFeeling: [],
        },{
            topicName: "四",
            topicFeeling: [],
        },{
            topicName: "五",
            topicFeeling: [],
        },{
            topicName: "六",
            topicFeeling: [],
        }];
        setTopicList(newTopicList);
      }, []);

      const toTopic = (item) => {
        // 将 item 转为 JSON 字符串
        const itemString = JSON.stringify(item);
        Taro.navigateTo({
          url: `/pages/mytopic/index?item=${encodeURIComponent(itemString)}`,
        });
      }

  return (
    <>
        <View className='topic'>
            {
                topicList.map((item,index)=>(
                  <View key={index} className='topicBack'>
                    <View onClick={()=>toTopic(item)}></View>
                    <Text>{item.topicName}</Text>
                  </View>
                ))
            }
        </View>
    </>
  )
}
