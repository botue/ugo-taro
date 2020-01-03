import Taro, { Component } from '@tarojs/taro'

import { View, Text, Label, Input, Navigator, Icon, Image } from '@tarojs/components'

import './index.scss'

export default class Cart extends Component {

  config = {
    navigationBarTitleText: '购物车'
  }

  render () {
    return (
      <View className="wrapper">
        {/* 收货信息 */}
        <View className="shipment">
          <View className="dt">收货人: </View>
          <View className="dd meta">
            <Text className="name">刘德华</Text>
            <Text className="phone">13535337057</Text>
          </View>
          <View className="dt">收货地址:</View>
          <View className="dd">广东省广州市天河区一珠吉</View>
        </View>
        {/* 购物车 */}
        <View className="carts">
          <View className="item">
            {/* 店铺名称 */}
            <View className="shopname">优购生活馆</View>
            <View className="goods">
              {/* 商品图片 */}
              <Navigator url="/pages/goods">
                <Image className="pic" src="/static/uploads/goods_1.jpg"></Image>
              </Navigator>
              {/* 商品信息 */}
              <View className="meta">
                <View className="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
                <View className="price">
                  <Label>￥</Label>1399<Text>.00</Text>
                </View>
                {/* 加减 */}
                <View className="amount">
                  <Label className="reduce">-</Label>
                  <Input type="number" value="1" className="number" />
                  <Label className="plus">+</Label>
                </View>
              </View>
              {/* 选框 */}
              <Label className="checkbox">
                <Icon type="success" size="20" color="#ea4451"></Icon>
              </Label>
            </View>
            <View className="goods">
              {/* 商品图片 */}
              <Navigator url="/pages/goods">
                <Image className="pic" src="/static/uploads/goods_2.jpg"></Image>
              </Navigator>
              {/* 商品信息 */}
              <View className="meta">
                <View className="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
                <View className="price">
                  <Label>￥</Label>1399<Text>.00</Text>
                </View>
                {/* 加减 */}
                <View className="amount">
                  <Label className="reduce">-</Label>
                  <Input type="number" value="1" className="number" />
                  <Label className="plus">+</Label>
                </View>
              </View>
              {/* 选框 */}
              <Label className="checkbox">
                <Icon type="success" size="20" color="#ea4451"></Icon>
              </Label>
            </View>
            <View className="goods">
              {/* 商品图片 */}
              <Navigator url="/pages/goods">
                <Image className="pic" src="/static/uploads/goods_5.jpg"></Image>
              </Navigator>
              {/* 商品信息 */}
              <View className="meta">
                <View className="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
                <View className="price">
                  <Label>￥</Label>1399<Text>.00</Text>
                </View>
                {/* 加减 */}
                <View className="amount">
                  <label className="reduce">-</label>
                  <Input type="number" value="1" className="number" />
                  <label className="plus">+</label>
                </View>
              </View>
              {/* 选框 */}
              <Label className="checkbox">
                <Icon type="success" size="20" color="#ccc"></Icon>
              </Label>
            </View>
          </View>
        </View>
        {/* 其它 */}
        <View className="extra">
          <Label className="checkall">
            <Icon type="success" color="#ccc" size="20"></Icon>
            全选
          </Label>
          <View className="total">
            合计: <Label>￥</Label><Label className="num">14110</Label><Label>.00</Label>
          </View>
          <View className="pay">结算(3)</View>
        </View>
      </View>
    )
  }
}