import { View, Text , Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'
import Navbar from '../../components/together/Navbar'
import React,{ useState } from 'react'
import Common from '../../components/together/common/Common'
import Mine from '../../components/together/mine/Mine'

export default function Index() {

  const [current, setCurrent] = useState(0);

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <>
      <View className='index'>
        <Navbar current={current} setCurrent={setCurrent}/>
      </View>
      <View>
        {current === 0 && <Common/>}
        {current === 1 && <Mine/>}
      </View>
    </>
  )
}
