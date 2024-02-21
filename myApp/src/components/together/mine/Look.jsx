import { View , Image} from '@tarojs/components'
import React from 'react'
import shuzhiImage from '../../../assets/mine/滚动组 9@3x.png'
import cloudOneImage from '../../../assets/mine/路径 214@3x.png'
import cloudTwoImage from '../../../assets/mine/路径 216@3x.png'
import './Look.css'

export default function Look() {
  return (
    <>
        <View>
            <Image className='shuzhi' src={shuzhiImage}></Image>
            <Image className='cloudOne' src={cloudOneImage}></Image>
            <Image className='cloudTwo' src={cloudTwoImage}></Image>
        </View>
    </>
  )
}
