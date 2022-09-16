// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function Splashscreen() {
//   return (
//     <View>
//       <Text>Onboardingscreen</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})
import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
// import { colors, SIZES } from '../constants/index'
// import { colors,SIZES } from '../../src/constants'
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
// import data from '../data/onboarding'
import LinearGradient from 'react-native-linear-gradient'

import { useNavigation } from '@react-navigation/native';


import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
const ratio = 690 / 428;
const SIZES = {
  base: 10,
  width,
  height
}


const data = [
  {
    _id: '1',
    title: 'Buy A Car',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque eget eu amet magna. Sed imperdiet auctor morbi ultricies posuere vitae lorem cursus urna.',
    // img: require('../src/assets/images/Guitar.png')
    img: require('../../src/assets/imgs/Splash1.png')
  },
  {
    _id: '2',
    title: 'Sell Your Car',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque eget eu amet magna. Sed imperdiet auctor morbi ultricies posuere vitae lorem cursus urna.',
    img: require('../../src/assets/imgs/Splash2.png')
  },
  {
    _id: '3',
    title: 'Bid and get at best Price',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque eget eu amet magna. Sed imperdiet auctor morbi ultricies posuere vitae lorem cursus urna.',
    img: require('../../src/assets/imgs/Splash3.png')
  },
]

const Splashscreen = () => {

  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([])

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    setViewableItems(viewableItems)
  })
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index)
      return;
    setCurrentPage(viewableItems[0].index)

  }, [viewableItems])

  const navigation = useNavigation();
  const handleNext = () => {
    if (currentPage == data.length - 1) {
      // alert('Please select');
      navigation.navigate('Tabs')
      // alert('rsdvf')
      return;
    }

    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1
    })
  }

  const handleBack = () => {
    if (currentPage == 0)
      return;
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage - 1
    })
  }

  const handleSkipToEnd = () => {
    flatlistRef.current.scrollToIndex({
      animate: true,
      index: data.length - 1
    })
  }



  const renderBottomSection = () => {
    return (
      <View style={{
        flex: 1,
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        position: 'absolute',
        left: width-80,
        top: height-160,
      }}>
        <View style={{
        }}>
          <TouchableOpacity
            onPress={handleNext}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#fff',

            }}
            activeOpacity={0.8}
          >
            {/* <AntDesignIcons name="right"
              style={{ fontSize: 18, color: '#0073FF', opacity: 0.3 }} /> */}
            <AntDesignIcons
              name="right"
              style={{ fontSize: 25, color: '#0073FF', }}
            />
          </TouchableOpacity>


          <View style={{ flexDirection: 'row', }}>
            {
              // No. of dots
              [...Array(data.length)].map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 15,
                    backgroundColor: index == currentPage
                      ? '#fff'
                      : '#BABABA',
                    marginHorizontal: 4,
                    marginTop: 10
                  }} />
              ))
            }


          </View>
        </View>
      </View>
    )
  }

  const renderFlatlistItem = ({ item }) => {
    return (
      <View style={{
        // width: SIZES.width,
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
        backgroundColor: '#0073FF',
        position:'relative'
      }}>
        <View style={{
          // alignItems: 'center',
          // marginVertical: SIZES.base * 2

        }}>
          <ImageBackground
            source={item.img}
            style={{ width, height: width * ratio / 1.25, justifyContent: 'flex-end' }}
          >
            <LinearGradient
              colors={['#2177DF05', '#2177DF']}
              style={[{ height: 130, marginBottom: 0 }]} />
          </ImageBackground >
        </View>
        <View style={{
          padding: 10,
          flex: 1
        }}>

          <Text
            style={{
              fontSize: 30,
              fontWeight: '700',
              fontFamily: 'Inter',
              color: '#fff',
              maxWidth: width / 1.1
            }}>
            {item.title}
          </Text>
          <View style={{

            flex: 1,
            flexDirection: 'row'
          }}>
            <View style={{}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'Inter',
                  color: '#fff',
                  maxWidth: width / 1.6
                }}>
                {item.description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    }}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />

      {/* TOP SECTION - Back & Skip button */}
      {/* {renderTopSection()} */}

      {/* FLATLIST with pages */}
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item._id}
        renderItem={renderFlatlistItem}

        ref={flatlistRef}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
        initialNumToRender={1}
        extraData={SIZES.width}
      />

      {/* BOTTOM SECTION - pagination & next or GetStarted button */}
      {renderBottomSection()}

    </View>
  )
}

export default Splashscreen
