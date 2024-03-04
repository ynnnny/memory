import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.css'
import TopicNavber from '../../components/mytopic/TopicNavber'
import TopicContent from '../../components/mytopic/TopicContent'
import { useState } from 'react'
import Delete from '../../components/Delete'

export default function Mytopic() {
  const [topicNumber, setTopicNumber] = useState(1);
  const router = Taro.useRouter();
  const itemString = decodeURIComponent(router.params.item);
  const itemTopic = JSON.parse(itemString);

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <>
    <View className={topicNumber===0?"mytopic":""}>
      <TopicNavber itemTopic={itemTopic} topicNumber={topicNumber} setTopicNumber={setTopicNumber}/>
      <TopicContent itemTopic={itemTopic} topicNumber={topicNumber} setTopicNumber={setTopicNumber}/>
    </View>
    <View>
      <Delete nonenumber={1} number={topicNumber} setNumber={setTopicNumber} text="专题"/>
    </View>
    </>
  )
}
