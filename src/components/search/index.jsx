
import Taro, { Component } from '@tarojs/taro'

import { View, Input, Text, Navigator, ScrollView } from '@tarojs/components'

import './index.scss'

export default class Search extends Component {

  constructor (props) {
    super(props)
    this.goSearch = this.goSearch.bind(this)
  }

  state = {
    focused: false,
    placeholder: ''
  }
  
  goSearch () {
    this.setState({
      focused: true,
      placeholder: '请输入您想要的商品'
    })

    this.props.onSearch && this.props.onSearch({
      pageHeight: Taro.getSystemInfoSync().windowHeight + 'px'
    })
  }

  cancelSearch () {
    this.setState({
      focused: false,
      placeholder: ''
    })

    this.props.onSearch && this.props.onSearch({
      pageHeight: 'auto'
    })
  }

  render () {
    return (
      <View className={['search', this.state.focused ? 'focused' : ''].join(' ')}>
        {/* 输入框 */}
        <View className="input-wrap">
          <Input
            onFocus={this.goSearch}
            placeholder={this.state.placeholder} />
          <Text
            onClick={this.cancelSearch}
            className="cancel">取消</Text>
        </View>
        {/* 搜索结果 */}
        <View className="content">
          <View className="title">搜索历史<Text className="clear"></Text></View>
          <View className="history">
            <Navigator url="">小米</Navigator>
            <Navigator url="">智能电视</Navigator>
            <Navigator url="">小米空气净化器</Navigator>
            <Navigator url="">西门子洗碗机</Navigator>
            <Navigator url="">华为手机</Navigator>
            <Navigator url="">苹果</Navigator>
            <Navigator url="">锤子</Navigator>
          </View>
          {/* 结果 */}
          <View className="result">
            <ScrollView scrollY>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
              <Navigator url="">小米</Navigator>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}