import Taro from '@tarojs/taro-rn';
import React from 'react';

import { Component } from "@tarojs/taro-rn";

import { View, Text, Image, ScrollView } from "@tarojs/components-rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
export default class List extends Component {

  goDetail() {
    Taro.navigateTo({
      url: '/pages/goods/index'
    });
  }

  render() {
    return <View>
        {}
        <View style={_styleSheet["filter"]}>
          <Text style={[_styleSheet["text"], _styleSheet["active"]]}>综合</Text>
          <Text style={_styleSheet["text"]}>销量</Text>
          <Text style={_styleSheet["text"]}>价格</Text>
        </View>
        {}
        <ScrollView scrollY style={_styleSheet["goods"]}>
          <View onClick={this.goDetail} style={_styleSheet["item"]}>
            {}
            <Image src="http://static.botue.com/ugo/uploads/goods_1.jpg" style={_styleSheet["pic"]}></Image>
            {}
            <View style={_styleSheet["meta"]}>
              <View style={_styleSheet["name"]}>【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
              <View style={_styleSheet["price"]}>
                <Text style={_styleSheet["text"]}>￥</Text>
                1399
                <Text style={_styleSheet["text"]}>.00</Text>
              </View>
            </View>
          </View>
          <View onClick={this.goDetail} style={_styleSheet["item"]}>
            {}
            <Image src="http://static.botue.com/ugo/uploads/goods_2.jpg" style={_styleSheet["pic"]}></Image>
            {}
            <View style={_styleSheet["meta"]}>
              <View style={_styleSheet["name"]}>卡奇莱德汽车车载空气净化器负离子除甲醛PM2.5除烟异味车用氧吧双涡轮出风（红色）</View>
              <View style={_styleSheet["price"]}>
                <Text style={_styleSheet["text"]}>￥</Text>
                168
                <Text style={_styleSheet["text"]}>.00</Text>
              </View>
            </View>
          </View>
          <View onClick={this.goDetail} style={_styleSheet["item"]}>
            {}
            <Image src="http://static.botue.com/ugo/uploads/goods_3.jpg" style={_styleSheet["pic"]}></Image>
            {}
            <View style={_styleSheet["meta"]}>
              <View style={_styleSheet["name"]}>沿途（yantu）车载充电器车充一拖二usb转接口手机智能头多功能汽车点烟器</View>
              <View style={_styleSheet["price"]}>
                <Text style={_styleSheet["text"]}>￥</Text>
                168
                <Text style={_styleSheet["text"]}>.00</Text>
              </View>
            </View>
          </View>
          <View onClick={this.goDetail} style={_styleSheet["item"]}>
            {}
            <Image src="http://static.botue.com/ugo/uploads/goods_4.jpg" style={_styleSheet["pic"]}></Image>
            {}
            <View style={_styleSheet["meta"]}>
              <View style={_styleSheet["name"]}>车载冰箱7.5L 冷暖两用汽车冰箱半导体12V迷你电冰箱升级款</View>
              <View style={_styleSheet["price"]}>
                <Text style={_styleSheet["text"]}>￥</Text>
                168
                <Text style={_styleSheet["text"]}>.00</Text>
              </View>
            </View>
          </View>
          <View onClick={this.goDetail} style={_styleSheet["item"]}>
            {}
            <Image src="http://static.botue.com/ugo/uploads/goods_5.jpg" style={_styleSheet["pic"]}></Image>
            {}
            <View style={_styleSheet["meta"]}>
              <View style={_styleSheet["name"]}>神行者电子狗 神行者L70电子狗测速 测速雷达 流动测速 多种警示路段提醒</View>
              <View style={_styleSheet["price"]}>
                <Text style={_styleSheet["text"]}>￥</Text>
                168
                <Text style={_styleSheet["text"]}>.00</Text>
              </View>
            </View>
          </View>
          {}
          <View style={_styleSheet["getMore"]}>正在加载...</View>
        </ScrollView>
      </View>;
  }
}