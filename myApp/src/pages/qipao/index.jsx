import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'
import MemoryNavbar from '../../components/qipao/memoryNavbar'

export default function Qipao() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='qipao'>
      <MemoryNavbar/>
    </View>
  )
}
