import { Image, Input, Text, View } from '@tarojs/components'
import React, { useState } from 'react'
import './index.css'
import searchbackImage from '../../assets/search/背景图@3x.png'
import zhuyeImage from '../../assets/search/主页图标@3x.png'
import boxImage from '../../assets/search/搜索框@3x.png'
import searchbuttonImage from '../../assets/search/搜索按钮@3x.png'
import searchrubbishImage from '../../assets/search/垃圾桶@3x.png'
import zu137Image from '../../assets/search/组 137@3x.png'

import Taro, { useLoad } from '@tarojs/taro'

export default function Search() {

  const [isexpend,setIsexpend] = useState(true);

  useLoad(() => {
    console.log('Page loaded.')
  })

  const searchPlace = (evt)=>{
    console.log(evt.target.value);
  }

  const changeSearch = ()=>{
    Taro.navigateTo({
        url: '/pages/qipao/index'
    })
  }

  const changeEor = ()=>{
    const newIsexpend = !isexpend;
    setIsexpend(newIsexpend);
  }

  const backHome = ()=>{
    Taro.navigateBack();
  }

return (
  <>
    <View>
      <Image className='searchback' src={searchbackImage}></Image>
      <View className='searchpage'>
        <Image onClick={()=>backHome()} className='searchhome' src={zhuyeImage}></Image>
        <View className='searchbox'>
            <Image className='box' src={boxImage}></Image>
            <Input className='searchinput' onInput={(event)=>searchPlace(event)}></Input>
            <Image className='searchbutton' src={searchbuttonImage}></Image>
            <Text onClick={()=>changeSearch()}>搜索</Text>
        </View>
        <View className='searchhistory'>
            <Text>搜索历史</Text>
            <View onClick={()=>changeEor()} className={isexpend?'expend':'recover'}>
                {isexpend ? '展开' : '收回'}
            </View>
            <Image className='searchrubbish' src={searchrubbishImage}></Image>
        </View>
        <View className='zhixian'></View>
        <View className='placedisplay'>
            <View>
                <Text>大理</Text>
            </View>
            <View>
                <Text>大理</Text>
            </View>
            <View>
                <Text>······</Text>
            </View>
            <View>
                <Text>大理</Text>
            </View>
            <View>
                <Text>大理</Text>
            </View>
            <View>
                <Text>大理</Text>
            </View>
        </View>
        <Image className='zu137' src={zu137Image}></Image>
        <View className='guessyou'>
            <View className='searchyou'>猜你想搜</View>
            <View className='zhixian0'></View>
            <View className='cities'>
                <View className='hot'>热门城市</View>
                <View className='citydisplay'>
                    <View>
                        <Text>大理</Text>
                    </View>
                    <View>
                        <Text>大理</Text>
                    </View>
                    <View>
                        <Text>大理</Text>
                    </View>
                    <View>
                        <Text>大理</Text>
                    </View>
                    <View>
                        <Text>大理</Text>
                    </View>
                    <View>
                        <Text>大理</Text>
                    </View>
                </View>
            </View>
            <View className='landscape'>
                <View className='specialland'>特定风景</View>
                <View className='citydisplay'>
                    <View>
                        <Text>大理</Text>
                    </View>
                    <View>
                        <Text>大理</Text>
                    </View>
                    <View>
                        <Text>大理</Text>
                    </View>
                    <View>
                        <Text>大理</Text>
                    </View>
                    <View>
                        <Text>大理</Text>
                    </View>
                    <View>
                        <Text>大理</Text>
                    </View>
                </View>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}