import React from 'react'
import { Image, View , Text } from '@tarojs/components'
import './Personalpage.css'
import backgroundImage from '../../assets/personal/背景图@2x.png'
import duobian6Image from '../../assets/personal/多边形 6@2x.png'
import cookieImage from '../../assets/personal/cookie@2x.png'
import juxing176Image from '../../assets/personal/矩形 176@2x.png'
import lujing193Image from '../../assets/personal/路径 193@2x.png'
import lujing194Image from '../../assets/personal/路径 194@2x.png'
import lujing195Image from '../../assets/personal/路径 195@2x.png'
import tuoyuan41 from '../../assets/personal/椭圆 41@2x.png'

export default function Personalpage() {

  const changeName = ()=>{
    console.log("修改昵称");
  }

  const changePassword = ()=>{
    console.log("修改密码");
  }

  const logout = ()=>{
    console.log("退出登录");
  }

  return (
    <>
    <View>
        <Image className='background' src={backgroundImage}></Image>
        <View className='username'>
            <Text>林林</Text>
            <Image className='cookie' src={cookieImage}></Image>
        </View>
        <View className='change'>
          <Image className='shugan' src={duobian6Image}></Image>
          <View className='changeName'>
            <View onClick={()=>changeName()}>
              <Image className='juxing176' src={juxing176Image}></Image>
              <Text>修改昵称</Text>
            </View>
            <Image className='lujing193' src={lujing193Image}></Image>
          </View>
          <View className='changePass'>
            <View onClick={()=>changePassword()}>
              <Image className='juxing176' src={juxing176Image}></Image>
              <Text>修改密码</Text>
            </View>
            <Image className='lujing194' src={lujing194Image}></Image>
          </View>
          <View className='logout'>
            <View onClick={()=>logout()}>
              <Image className='juxing176' src={juxing176Image}></Image>
              <Text>退出登录</Text>
            </View>
            <Image className='lujing195' src={lujing195Image}></Image>
          </View>
          <Image className='treebottom' src={tuoyuan41}></Image>
        </View>
    </View>
    </>
  )
}
