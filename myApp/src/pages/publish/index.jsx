import { View, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'
import zu120Image from '../../assets/publish/组 120@2x.png'
import Taro from '@tarojs/taro'
import CommonPage from '../../components/publish/CommonPage'

export default function Publish() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const publishCommon = ()=>{
    console.log("发布记忆");
    Taro.navigateBack();
  }

  return (
    <View className='publish'>
      <View>
        <View className='oneNavber'>
            <Image className='zu120' src={zu120Image} onClick={()=>publishCommon()}></Image>
            <View onClick={()=>publishCommon()}>发布</View>
        </View>
      </View>
      <CommonPage/>
    </View>
  )
}
