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

// Today's Share Item
const ShareWrapper = styled.View`
  flex:1;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: ${COLORS.white};
`;
const TodaysTitleWrapper = styled.View`
  flex: 1;
  margin-top: ${SIZES.font}px;
  margin-left: ${SIZES.padding}px;
  margin-right: ${SIZES.padding}px;
`;
const TitleItemWrapper = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
const Title = styled.Text`
  color: ${COLORS.secondary};
`;
const SeeAll = styled.Text`
  color: ${COLORS.secondary};
`;
const SharePicWrapper = styled.View`
  height: 82%;
  flex-direction: row;
  margin-top: ${SIZES.base}px;
`;
const ShareLeftPicWrapper = styled.View`
  flex: 1;
`;
const ShareRightPicWrapper = styled.View`
  flex: 1.3;
`;
const ImagePicker = styled.TouchableOpacity`
  flex:1;
`;


const Home = ( {navigation} ) => {
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
              <TouchableOpacity onPress={()=>{ navigation.navigate('PlantDetail') }}>              
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
      {/* Start of Today's Share */}
      
      <ShareWrapper>
        <TodaysTitleWrapper>
       
          <TitleItemWrapper>
            <Title style={{...FONTS.h2}}>Today's Share</Title>
            <TouchableOpacity onPress={()=>{navigation.navigate('PlantDetail')}}>
              <SeeAll style={{...FONTS.body3}}>See All</SeeAll>
            </TouchableOpacity>
          </TitleItemWrapper>
      

          {/* Today's Share pictures */}
          <SharePicWrapper>
            {/* left main pic */}
            <ShareLeftPicWrapper>
              <ImagePicker 
                onPress={()=> {navigation.navigate('PlantDetail')}}
              >
                <Image 
                  source={images.plant5}
                  resizeMode='cover'
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
              </ImagePicker>
              <ImagePicker 
                style={{marginTop: SIZES.font}} 
                onPress={ ()=> {navigation.navigate('PlantDetail')} }
              >
                <Image 
                  source={images.plant6}
                  resizeMode='cover'
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
              </ImagePicker>
            </ShareLeftPicWrapper>

            {/* right main pic */}
            <ShareRightPicWrapper>
              <ImagePicker 
                style={{marginLeft: SIZES.font}} 
                onPress={ ()=> {navigation.navigate('PlantDetail')} }
              >
                <Image 
                  source={images.plant7}
                  resizeMode='cover'
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
              </ImagePicker>
            </ShareRightPicWrapper>
          </SharePicWrapper> 
        </TodaysTitleWrapper>
      </ShareWrapper>
      {/* End of Today's Share */}
      

      <AddedFriends/>
      
    </Container>
  )
}

export default Home;