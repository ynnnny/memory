import { View  , Text , Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect } from 'react'
import './Navbar.css' 

const Navbar = (props)=> {

  const {current,setCurrent} = props;

  const handleChangeCurrent = (index)=>{
    setCurrent(index);
    console.log(current);
  }

  return (
    <>
      <View className='navbar'>
        <View className='text-container' onClick={()=>handleChangeCurrent(0)}>
          <Text className={current===0?'memoryActive':''}>
            共同记忆
          </Text>
        </View>
        <View className='text-container' onClick={()=>handleChangeCurrent(1)}>
          <Text className={current===1?'memoryActive':''}>
            我的记忆
          </Text>
        </View>
      </View>
    </>
  )
}

export default  Navbar