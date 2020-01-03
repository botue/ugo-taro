import Taro, { Component } from '@tarojs/taro'

import { View, Image, Text, Navigator, ScrollView } from '@tarojs/components'

import './index.scss'

import Search from '@/components/search'

export default class Category extends Component {

  config = {
    navigationBarTitleText: '分类'
  }

  render () {
    return (
      <View className="wrapper">
        {/* 搜索组件 */}
        <Search />
        <View className="category">
          {/* 顶级分类 */}
          <View className="sup">
            <ScrollView scrollY>
              <Text className="list active">大家电</Text>
              <Text className="list">热门推荐</Text>
              <Text className="list">海外购</Text>
              <Text className="list">苏宁房产</Text>
              <Text className="list">手机相机</Text>
              <Text className="list">电脑办公</Text>
              <Text className="list">厨卫电器</Text>
              <Text className="list">食品酒水</Text>
              <Text className="list">居家生活</Text>
              <Text className="list">厨房电器</Text>
            </ScrollView>
          </View>
          {/* 子级分类 */}
          <View className="sub">
            <ScrollView scrollY>
              {/* 封面图 */}
              <Image src="/static/uploads/category.png" className="thumb"></Image>
              <View className="children">
                <View className="title">电视</View>
                {/* 品牌 */}
                <View className="brands">
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_1.jpg"></Image>
                    <Text>曲面电视</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_2.jpg"></Image>
                    <Text>海信</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_3.jpg"></Image>
                    <Text>创维</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_4.jpg"></Image>
                    <Text>夏普</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_5.jpg"></Image>
                    <Text>TCL</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_6.jpg"></Image>
                    <Text>PPTV</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_7.jpg"></Image>
                    <Text>小米</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_8.jpg"></Image>
                    <Text>长虹</Text>
                  </Navigator>
                </View>
              </View>
              <View className="children">
                <View className="title">电视</View>
                {/* 品牌 */}
                <View className="brands">
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_1.jpg"></Image>
                    <Text>曲面电视</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_2.jpg"></Image>
                    <Text>海信</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_3.jpg"></Image>
                    <Text>创维</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_4.jpg"></Image>
                    <Text>夏普</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_5.jpg"></Image>
                    <Text>TCL</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_6.jpg"></Image>
                    <Text>PPTV</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_7.jpg"></Image>
                    <Text>小米</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_8.jpg"></Image>
                    <Text>长虹</Text>
                  </Navigator>
                </View>
              </View>
              <View className="children">
                <View className="title">电视</View>
                {/* 品牌 */}
                <View className="brands">
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_1.jpg"></Image>
                    <Text>曲面电视</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_2.jpg"></Image>
                    <Text>海信</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_3.jpg"></Image>
                    <Text>创维</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_4.jpg"></Image>
                    <Text>夏普</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_5.jpg"></Image>
                    <Text>TCL</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_6.jpg"></Image>
                    <Text>PPTV</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_7.jpg"></Image>
                    <Text>小米</Text>
                  </Navigator>
                  <Navigator url="/pages/list">
                    <Image src="/static/uploads/brand_8.jpg"></Image>
                    <Text>长虹</Text>
                  </Navigator>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}