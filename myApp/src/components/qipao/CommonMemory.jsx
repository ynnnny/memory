import { View , Image ,Textarea, Text } from '@tarojs/components'
import React, { useState } from 'react'
import './CommonMemory.css'
import backgroundImage from '../../assets/qipao/背景图@2x.png'
import buleroundImage from '../../assets/qipao/蓝椭圆@2x.png'
import greenroundImage from '../../assets/qipao/绿椭圆@2x.png'
import lujing187Image from '../../assets/qipao/路径 187@2x.png'
import lujing188Image from '../../assets/qipao/路径 188@2x.png'


export default function CommonMemory(props) {

    const {deletenumber,setDeletenumber} = props;

    const [text,setText] = useState('')

    const handleChangetext = (evt)=>{
        console.log(evt.target.value);
        setText(evt.target.value);
    }

    const sendComment = (evt)=>{
        console.log("发布评论",text);
        setText('')
    }

  return (
    <>
        <View>
            <View className='backPage'>
                <Image className='paoBackground' src={backgroundImage}></Image>
                <Image className='blueround' src={buleroundImage}></Image>
                <Image className='greenround' src={greenroundImage}></Image>
                <Image className='blueround1' src={buleroundImage}></Image>
            </View>
            <View className='showMemory'>
                <View className='user'>
                    <View className='myusername'>昵称</View>
                </View>
                <View className='textShow'>
                    <View>1111</View>
                    <View>2222</View>
                </View>
                <Image className='lujing187' src={lujing187Image}></Image>
                <View className='photoShow'>

                </View>
                <Image className='lujing188' src={lujing188Image}></Image>
                <View className='comment'>
                    <View className='pinglun'>评论</View>
                    <View className='commentShow'>
                        <View className='showcomment'>
                            <Text className='commentName'>林林</Text>
                            <View className='content'>11111111111111111111111111111111111111111111111111111111111111111111111111</View>
                            <Text className='commentDate'>2024.10.30</Text>
                        </View>
                        <View className='showcomment'>
                            <Text className='commentName'>林林</Text>
                            <View className='content'>11111111111111111111111111111111111111111111111111111111111111111111111111</View>
                            <Text className='commentDate'>2024.10.30</Text>
                        </View>
                        <View className='showcomment'>
                            <Text className='commentName'>林林</Text>
                            <View className='content'>11111111111111111111111111111111111111111111111111111111111111111111111111</View>
                            <Text className='commentDate'>2024.10.30</Text>
                        </View>
                    </View>
                    <View className='publish'>
                        <Textarea onInput={(event)=>handleChangetext(event)} value={text} className='inputComment'></Textarea>
                        <View className='send' onClick={()=>sendComment()}>发送</View>
                    </View>
                </View>
            </View>
        </View>
    </>
  )
}
