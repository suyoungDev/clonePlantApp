import React from 'react';
import {
  View,
  Text
}from 'react-native';
import { color } from 'react-native-reanimated';
import styled from 'styled-components';
import { COLORS } from '../constants';

const Container = styled.View`
  flex: 1;
`;

const Home = () => {
  return(
    <Container>
      {/* New Plants */}
      <View style={{height: '30%', backgroundColor: COLORS.white}}></View>
      {/* Today's Share */}
      <View style={{height: '50%', backgroundColor: COLORS.lightGray}}></View>
      {/* Added Friend */}
      <View style={{height: '20%', backgroundColor: COLORS.lightGray}}></View>
    </Container>
  )
}

export default Home;