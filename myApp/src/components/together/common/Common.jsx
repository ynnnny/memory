import { View , Text , Image} from '@tarojs/components'
import React from 'react'
import zu85Image from '../../../assets/common/组 85@2x.png'
import zu70Image from '../../../assets/common/组 70@2x.png'
import zu78Image from '../../../assets/common/组 78@2x.png'
import paopaoImage from '../../../assets/common/泡泡@2x.png'
import zu77Image from '../../../assets/common/组 77@2x.png'
import zu71Image from '../../../assets/common/组 71@2x.png'
import zu81Image from '../../../assets/common/组 81@2x.png'
import zu83Image from '../../../assets/common/组 83@2x.png'
import zu144Image from '../../../assets/common/组 144@2x.png'
import zu64Image from '../../../assets/common/组 64@2x.png'
import zu145Image from '../../../assets/common/组 145@2x.png'
import './Common.css'
import ToolMemory from './ToolMemory'
import Taro from '@tarojs/taro'

export default function Common() {

  const lookMemory = () =>{
    console.log('memory');
    Taro.navigateTo({
      url: '/pages/qipao/index',
    });
  }

  const multiMemory = ()=>{
    console.log("多人记忆");
  }

  return (
    <>
        <View className='commonMemory'>
            <View className='duorenMemory' onClick={()=>multiMemory()}>
                <View className='bluePin'></View>
                <Image className='zu85' src={zu85Image}></Image>
                <View>
                  <Text className='multi'>
                    多人记忆
                  </Text>
                </View>
            </View>
            <View className='docation'>
              <Image className='zu81' src={zu81Image}></Image>
              <Image className='zu83' src={zu83Image}></Image>
              <View className='paopao1'>
                <Image className='zu70' src={zu70Image}></Image>
                <Image className='zu78' src={zu78Image}></Image>
              </View>
              <View className='paopao2'>
                <Image className='paopaoImage' src={paopaoImage}></Image>
                <Image className='zu77' src={zu77Image}></Image>
              </View>
                <Image className='paopao3' src={zu144Image}></Image>
                <Image className='zu71' src={zu71Image}></Image>
              <View className='memory'>
                <View className='memoryOne'>
                  <Image className='zu64' src={zu64Image}></Image>
                  <Text onClick={()=>lookMemory()} className='oneDate'>24.1.22</Text>
                </View>
                <View className='memoryTwo'>
                  <Image className='zu145' src={zu145Image}></Image>
                  <Text onClick={()=>lookMemory()} className='twoDate'>24.12.24</Text>
                </View>
                <View className='memoryThree'>
                  <Image className='zu71memory' src={zu71Image}></Image>
                  <Text onClick={()=>lookMemory()} className='threeDate'>24.1.28</Text>
                </View>
                <View className='memoryFour'>
                  <Image className='paomemory' src={paopaoImage}></Image>
                  <Text onClick={()=>lookMemory()} className='fourDate'>24.15.86</Text>
                </View>
              </View>
            </View>
            <ToolMemory/>
        </View>
    </>
  )
}
