import { View, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'
import zu169Image from '../../assets/mypublish/组 169@2x.png'
import Taro from '@tarojs/taro'
import CommonPage from '../../components/mypublish/MinePage'
import { useState } from 'react'
import DiyTopic from '../../components/mypublish/DiyTopic'

export default function Mypublish() {

  const [diynumber,setDiynumber] = useState(1);

  useLoad(() => {
    console.log('Page loaded.')
  })

  const publishCommon = ()=>{
    console.log("发布");
    Taro.navigateBack();
  }

  return (
    <>
    <View className={diynumber===1?'':'publish'}>
      <View>
        <View className='oneNavber'>
            <Image className='zu169' src={zu169Image} onClick={()=>publishCommon()}></Image>
            <View onClick={()=>publishCommon()}>发布</View>
        </View>
      </View>
      <CommonPage diynumber={diynumber} setDiynumber={setDiynumber}/>
    </View>
    <View>
      {diynumber === 0?<DiyTopic diynumber={diynumber} setDiynumber={setDiynumber}/>:null}
    </View>
    </>
  )
}
