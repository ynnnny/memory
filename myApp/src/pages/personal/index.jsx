import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'
import Pernavber from '../../components/personal/Pernavber'
import Personalpage from '../../components/personal/Personalpage'

export default function Personal() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <>
      <Pernavber/>
      <Personalpage/>
    </>
  )
}
