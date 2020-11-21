import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
}from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import styled from 'styled-components';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

const Container = styled.View`
  flex: 1;
`;
const Label = styled.View`
  position: absolute;
  bottom: 17%;
  right: 0;
  background: ${COLORS.primary};
  padding-left: ${SIZES.base}px;
  padding-right: ${SIZES.base}px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const HeartContainer = styled.TouchableOpacity`
  position: absolute;
  top: 15%;
  left: 7;
`;


const Home = () => {
  
  // Dummy Data
  const [newPlants, setNewPlants] = React.useState([
    {
      id:0,
      name: "Plant 1",
      img: images.plant1,
      favorite: false
    },
    {
      id:1,
      name: "Plant 2",
      img: images.plant2,
      favorite: true
    },
    {
      id:2,
      name: "Plant 3",
      img: images.plant3,
      favorite: false
    },
    {
      id:3,
      name: "Plant 4",
      img: images.plant4,
      favorite: false
    }
  ])
  
  // Render Module
  function renderNewPlatns(item, index) {
    return(
      <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base}}>
        <Image 
          source={item.img}
          resizeMode='cover'
          style={{
            width: SIZES.width * 0.23,
            height: '82%',
            borderRadius: 15
          }}
        />
        
        <Label>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
        </Label>

        <HeartContainer onPress={()=>{}}>
          <Image 
            source={item.favorite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode='contain'
            style={{
              width: 20,
              height: 20,
            }}
          />
        </HeartContainer>
      </View>
    )
  }
  
  return(
    <Container>
      {/* New Plants */}
      <View style={{height: '30%', backgroundColor: COLORS.white}}>
        <View style={{
          flex:1,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          backgroundColor: COLORS.primary
        }}
        >
          <View style={{
            marginTop: SIZES.padding/2,
            marginHorizontal: SIZES.padding
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
              <Text style={{
                color: COLORS.white,
                ...FONTS.h2
              }}>
                New Plants
              </Text>
              <TouchableOpacity
                onPress={()=>{}}
              >
                <Image 
                  source={icons.focus}  
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>

            {/* Dummy Data, Module 이용 */}
            <View style={{ marginTop: SIZES.base }}>
              <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => renderNewPlatns(item, index)}
              />
            </View>
          </View>
        </View>
      </View>




      {/* Today's Share */}
      <View style={{height: '50%', backgroundColor: COLORS.lightGray}}></View>
      {/* Added Friend */}
      <View style={{height: '20%', backgroundColor: COLORS.lightGray}}></View>
    </Container>
  )
}

export default Home;