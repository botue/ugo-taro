
import Taro, { Component } from '@tarojs/taro'

import { View, Text, Image, Navigator, ScrollView } from '@tarojs/components'

export default class List extends Component {

  render () {
    return (
      <View>
        {/* 筛选 */}
        <View className="filter">
          <Text className="active">综合</Text>
          <Text>销量</Text>
          <Text>价格</Text>
        </View>
        {/* 商品列表 */}
        <ScrollView className="goods" scrollY>
          <View className="item">
            {/* 商品图片 */}
            <Image className="pic" src="http://static.botue.com/ugo/uploads/goods_1.jpg"></Image>
            {/* 商品信息 */}
            <View className="meta">
              <View className="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
              <View className="price">
                <Text>￥</Text>1399<Text>.00</Text>
              </View>
            </View>
          </View>
          <View className="item">
            {/* 商品图片 */}
            <Image className="pic" src="http://static.botue.com/ugo/uploads/goods_2.jpg"></Image>
            {/* 商品信息 */}
            <View className="meta">
              <View className="name">卡奇莱德汽车车载空气净化器负离子除甲醛PM2.5除烟异味车用氧吧双涡轮出风（红色）</View>
              <View className="price">
                <Text>￥</Text>168<Text>.00</Text>
              </View>
            </View>
          </View>
          <View className="item">
            {/* 商品图片 */}
            <Image className="pic" src="http://static.botue.com/ugo/uploads/goods_3.jpg"></Image>
            {/* 商品信息 */}
            <View className="meta">
              <View className="name">沿途（yantu）车载充电器车充一拖二usb转接口手机智能头多功能汽车点烟器</View>
              <View className="price">
                <Text>￥</Text>168<Text>.00</Text>
              </View>
            </View>
          </View>
          <View className="item">
            {/* 商品图片 */}
            <Image className="pic" src="http://static.botue.com/ugo/uploads/goods_4.jpg"></Image>
            {/* 商品信息 */}
            <View className="meta">
              <View className="name">车载冰箱7.5L 冷暖两用汽车冰箱半导体12V迷你电冰箱升级款</View>
              <View className="price">
                <Text>￥</Text>168<Text>.00</Text>
              </View>
            </View>
          </View>
          <View className="item">
            {/* 商品图片 */}
            <Image className="pic" src="http://static.botue.com/ugo/uploads/goods_5.jpg"></Image>
            {/* 商品信息 */}
            <View className="meta">
              <View className="name">神行者电子狗 神行者L70电子狗测速 测速雷达 流动测速 多种警示路段提醒</View>
              <View className="price">
                <Text>￥</Text>168<Text>.00</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}