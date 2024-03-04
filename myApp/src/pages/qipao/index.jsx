import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'
import MemoryNavbar from '../../components/qipao/MemoryNavbar'
import CommonMemory from '../../components/qipao/CommonMemory'
import { useState } from 'react'
import Delete from '../../components/Delete'

export default function Qipao() {

  const [deletenumber,setDeletenumber] = useState(1)

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <>
    <View className={deletenumber===0?'delete':''}>
      <MemoryNavbar deletenumber={deletenumber} setDeletenumber={setDeletenumber}/>
      <CommonMemory deletenumber={deletenumber} setDeletenumber={setDeletenumber}/>
    </View>
    <View>
      <Delete nonenumber={1} number={deletenumber} setNumber={setDeletenumber} text="记忆"/>
    </View>
    </>
  )
}
