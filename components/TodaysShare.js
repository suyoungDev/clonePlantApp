import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
}from 'react-native';

import { COLORS, FONTS, icons, images, SIZES } from '../constants';

import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.lightGray};
`;
const Title = styled.Text`
  color: ${COLORS.secondary};
`;
const SeeAll = styled.Text`
  color: ${COLORS.secondary};
`;
const ShareWrapper = styled.View`
  flex: 1;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: ${COLORS.white};
`;
const TitleWrapper = styled.View`
  margin-top: ${SIZES.font}px;
  margin-left: ${SIZES.padding}px;
  margin-right: ${SIZES.padding}px;
`;
const SharePicWrapper = styled.View`
  flex: 1;
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

export default function todaysShare(){
  return(
      
      <Container style={{height: '50%', backgroundColor: COLORS.lightGray}}>
        <ShareWrapper>
          <TitleWrapper>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
              <Title style={{...FONTS.h2}}>Today's Share</Title>
              <TouchableOpacity onPress={()=>{}}>
                <SeeAll style={{...FONTS.body3}}>See All</SeeAll>
              </TouchableOpacity>
            </View>
          </TitleWrapper>


          {/* Today's Share pictures */}
          <SharePicWrapper>
            {/* left main pic */}
            <ShareLeftPicWrapper style={{backgroundColor: 'yellow'}}>
              <ImagePicker onPress={()=>{}}>
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
              <ImagePicker style={{marginTop: SIZES.font}} onPress={()=>{}}>
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
            <ShareRightPicWrapper style={{backgroundColor:'pink'}}>
              <ImagePicker style={{marginLeft: SIZES.font}} onPress={()=>{}}>
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
        </ShareWrapper>
      </Container>
      
  )
}
