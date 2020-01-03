import Taro, { Component } from '@tarojs/taro'
import {
    View,
    Text,
    Image,
    Swiper,
    SwiperItem,
    RichText,
    Button
  } from '@tarojs/components'
  
import './index.scss'

export default class Goods extends Component {

  config = {
    navigationBarTitleText: '详情'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className="wrapper">
        {/* 商品图片 */}
        <Swiper className="pics" indicator-dots indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="#fff">
          <SwiperItem>
            <Image src="http://static.botue.com/ugo/uploads/detail_1.jpg"></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src="http://static.botue.com/ugo/uploads/detail_2.jpg"></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src="http://static.botue.com/ugo/uploads/detail_3.jpg"></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src="http://static.botue.com/ugo/uploads/detail_4.jpg"></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src="http://static.botue.com/ugo/uploads/detail_5.jpg"></Image>
          </SwiperItem>
        </Swiper>
        {/* 基本信息 */}
        <View className="meta">
          <View className="price">￥199</View>
          <View className="name">初语秋冬新款毛衣女 套头宽松针织衫简约插肩袖上衣</View>
          <View className="shipment">快递: 免运费</View>
          <Text className="collect icon-star">收藏</Text>
        </View>
        {/* 商品详情 */}
        <View className="detail">
          <RichText></RichText>
        </View>
        {/* 操作 */}
        <View className="action">
          <Button open-type="contact" className="icon-handset">联系客服</Button>
          <Text className="cart icon-cart">购物车</Text>
          <Text className="add">加入购物车</Text>
          <Text className="buy">立即购买</Text>
        </View>
      </View>
    )
  }
}
