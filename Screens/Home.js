import { Assets } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
}from 'react-native';
import styled from 'styled-components';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

import TodaysShare from '../components/TodaysShare';
import AddedFriends from '../components/AddedFriends';

const Container = styled.View`
  flex: 1;
`;
const ContainerNewPlants = styled.View`
  height: 30%;
  background: ${COLORS.white};
`;
const ContainerGreen = styled.View`
  flex: 1;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background: ${COLORS.primary};
`;
const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const GreenLabel = styled.View`
  position: absolute;
  bottom: 17%;
  right: 0;
  background: ${COLORS.primary};
  padding-left: ${SIZES.base*2}px;
  padding-right: ${SIZES.base/1.5}px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const HeartWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 15%;
  left: 7px;
`;
const PlantsListWrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: ${SIZES.base*2}px;
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
      <PlantsListWrapper>
        <Image 
          source={item.img}
          resizeMode='cover'
          style={{
            width: SIZES.width * 0.23,
            height: '82%',
            borderRadius: 15
          }}
        />
        
        <GreenLabel>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
        </GreenLabel>

        <HeartWrapper onPress={()=>{}}>
          <Image 
            source={item.favorite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode='contain'
            style={{
              width: 20,
              height: 20,
            }}
          />
        </HeartWrapper>
      </PlantsListWrapper>
    )
  }
  
  return(
    <Container>
      {/* Start of New Plants */}
      <ContainerNewPlants>
        <ContainerGreen>
          <View style={{
            marginTop: SIZES.font,
            marginHorizontal: SIZES.padding
          }}>
            <TitleWrapper>
              <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                New Plants
              </Text>
              <TouchableOpacity onPress={()=>{}}>              
                <Image 
                  source={icons.focus}  
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </TitleWrapper>

            {/* Dummy Data & Module 이용한 플랫리스트 */}
            
              <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => renderNewPlatns(item, index)}
              />
            
          </View>
        </ContainerGreen>
      </ContainerNewPlants>
      {/* End of New Plants */}

      <TodaysShare/>

      <AddedFriends/>
      
    </Container>
  )
}

export default Home;