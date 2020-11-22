import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
}from 'react-native';
import { COLORS, FONTS, images, SIZES } from '../constants';
import styled from 'styled-components';

const Container = styled.View`
  flex:1;
  background-color: ${COLORS.lightGray};
`;
const ShareWrapper = styled.View`
  flex:1;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: ${COLORS.white};
`;
const TitleWrapper = styled.View`
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

export default function todaysShare(){
  return(
      
    <Container>
      <ShareWrapper>
        <TitleWrapper>
       
          <TitleItemWrapper>
            <Title style={{...FONTS.h2}}>Today's Share</Title>
            <TouchableOpacity onPress={()=>{}}>
              <SeeAll style={{...FONTS.body3}}>See All</SeeAll>
            </TouchableOpacity>
          </TitleItemWrapper>
      

          {/* Today's Share pictures */}
          <SharePicWrapper>
            {/* left main pic */}
            <ShareLeftPicWrapper>
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
            <ShareRightPicWrapper>
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
        </TitleWrapper>
      </ShareWrapper>
    </Container>
  )
}
