import React from 'react';
import {
  View,
  Text,
  Image,
}from 'react-native';

import { COLORS, FONTS, icons, images, SIZES } from '../constants';

import styled from 'styled-components';

const Container = styled.View`
  height: 22%;
  background-color: ${COLORS.lightGray};
`;
const Wrapper = styled.View`
  flex:1;
  background: ${COLORS.lightGray};
`;
const ItemContainer = styled.View`
  margin-top: ${SIZES.radius}px;
  margin-left: ${SIZES.padding}px;
  margin-right: ${SIZES.padding}px;
`;
const Title = styled.Text`
  color: ${COLORS.secondary};
`;
const Explanation = styled.Text`
  color: ${COLORS.secondary};
`;
const FriendsWrapper = styled.View`
  flex-direction: row;
  height: 60%;
`;
const Friends = styled.View`
  flex: 1.3;
  flex-direction: row;
  align-items: center;
`;
const AddFriends = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const AddButton = styled.TouchableOpacity`
  margin-left: ${SIZES.base}px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.gray};
`;


export default function AddedFriends(){
  // Dummy Data
  const [friendList, setFriendList] = React.useState([
    {
      id: 0,
      img: images.profile1
    },
      {
      id: 1,
      img: images.profile2
    },
      {
      id: 2,
      img: images.profile3
    },
      {
      id: 3,
      img: images.profile4
    },
      {
      id: 4,
      img: images.profile5
    },
  ])

  // Render
  function renderFriendsComponent(){
    if (friendList.length == 0){
      return(
        <View></View>
      )
    } else if (friendList.length <= 3) {
      return(
        friendList.map((item, index) => (
          <View
            key={`friend-${index}`}
            style={index === 0 ? {} : {marginLeft: -20}} // 이미지 겹치게
          >
            <Image 
              source={item.img}
              resizeMode='cover'
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 3,
                borderColor: COLORS.primary,
              }}
            />
          </View>
        ))
      )
    } else {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {friendList.map((item, index) => {
            if(index <= 2){
              return (
                <View
                  key={`friend-${index}`}
                  style={index === 0 ? {} : {marginLeft: -20}} // 이미지 겹치게
                >
                  <Image 
                    source={item.img}
                    resizeMode='cover'
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      borderWidth: 3,
                      borderColor: COLORS.primary,
                    }}
                  />
                </View>
              )
            }
          })}

          <Text 
            style={{
              marginLeft: 5,
              color: COLORS.secondary,
              ...FONTS.body3,
            }}
          >
            +{friendList.length - 3} More
          </Text>
        </View>
      )
    }
  }

  return(
    <Container>
      <Wrapper>
        <ItemContainer>
          <Title style={{...FONTS.h2}}>Added to Friends</Title>
          <Explanation style={{...FONTS.body3}}>5 Total</Explanation>

          <FriendsWrapper>
            <Friends>
              {renderFriendsComponent()}
            </Friends>
            <AddFriends>
              <Text style={{color: COLORS.secondary, ...FONTS.body3}}>Add New</Text>
              <AddButton
                onPress={ () => {} }
              >
                <Image 
                  source={icons.plus}
                  resizeMode='cover'
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </AddButton>
            </AddFriends>
          </FriendsWrapper>
        </ItemContainer>
      </Wrapper>
    </Container>
  )
}
