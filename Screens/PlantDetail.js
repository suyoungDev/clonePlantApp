import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
}from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { icons, images, COLORS, FONTS, SIZES } from '../constants';

const Container = styled.View`
  flex: 1;
`;
const Banner = styled.View`
  height: 35%;
`;
const RequirementsWrapper = styled.View`
  flex:1;
  margin-top: -40px;
  background-color: ${COLORS.lightGray};
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding-top: ${SIZES.padding}px;
  padding-bottom: ${SIZES.padding}px;
`;
const Title = styled.Text`
  padding-left: ${SIZES.padding}px;
  padding-right: ${SIZES.padding}px;
  color: ${COLORS.secondary};
`;
const RenderWrapper = styled.View`
  flex-direction: row;
  margin-top: ${SIZES.padding}px;
  padding-left: ${SIZES.padding}px;
  padding-right: ${SIZES.padding}px;
  justify-content: space-between;
`;


const RequirementDetail = ( {icon, label, detail} ) =>{
  return(
    <View style={{ flexDirection: 'row'}} >
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image 
          source={icon}
          resizeMode='cover'
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30,
          }}
        />
        <Text style={{ 
            marginLeft: SIZES.base, 
            color: COLORS.secondary,
            ...FONTS.h2}}
        >
          {label}
        </Text>
        
        <View style={{
          flex: 1,
          alignItems: 'flex-end'
        }}>
          <Text style={{
            marginLeft: SIZES.base,
            color: COLORS.gray,
            ...FONTS.h2
          }}>{detail}</Text>
        </View>
      </View>
    </View>
  )
}


const RequirementsBar = ({ icon, barPercentage }) => {
  return(
    <View style={{height: 50, alignItems: 'center'}}>
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.gray,
        }}
      >
        <Image 
          source={icon}
          resizeMode='cover'
          style={{
            tintColor: COLORS.secondary,
            height: 25,
            width: 25,
          }}
        />
      </View>  

      {/* Bar */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
        }}
      >
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
        }}
      >
      </View>
    </View>
  )
}

const PlantDetail = ({navigation}) => {

  // Start of Render
  function renderRequirementsBar(){
    return(
      <RenderWrapper>
        <RequirementsBar 
          icon={icons.sun}
          barPercentage="50%"
        />
        <RequirementsBar 
          icon={icons.drop}
          barPercentage="25%"
        />
        <RequirementsBar 
          icon={icons.temperature}
          barPercentage="80%"
        />
        <RequirementsBar 
          icon={icons.sun}
          barPercentage="50%"
        />
        <RequirementsBar 
          icon={icons.garden}
          barPercentage="30%"
        />
        <RequirementsBar 
          icon={icons.sun}
          barPercentage="50%"
        />
      </RenderWrapper>
    )
  }

  function renderRequirements(){
    return(
      <View 
        style={{
          flex: 2.5, 
          marginTop: SIZES.padding, 
          paddingHorizontal: SIZES.padding, 
          justifyContent: 'space-around'
        }}
      >

        <RequirementDetail 
          icon={icons.sun}
          label='Sunlight'
          detail='15 C'
        />
        <RequirementDetail 
          icon={icons.drop}
          label='Water'
          detail='250 ml Daily'
        />
        <RequirementDetail 
          icon={icons.temperature}
          label='Room Temp'
          detail='25 C'
        />
        <RequirementDetail 
          icon={icons.garden}
          label='Soil'
          detail='3 Kg'
        />
        <RequirementDetail 
          icon={icons.seed}
          label='Fertilizer'
          detail='150 Mg'
        />
      </View>
    )
  }

  function renderFooter(){
    return(
      <View style={{ flex: 1, flexDirection: 'row', paddingVertical: SIZES.padding}}>
        
        <TouchableOpacity
          style={{
            flex: 1,
            // width: '50%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            paddingHorizontal: SIZES.padding,
            backgroundColor: COLORS.primary
          }}
          onPress={() => {}}
        >
          <Text style={{
            color: COLORS.white,
            ...FONTS.h2
          }}>Take Action
          </Text>

          <Image 
            source={icons.chevron}
            resizeMode='contain'
            style={{
              marginLeft: SIZES.padding,
              width: 20,
              height: 20
            }}
          />
        </TouchableOpacity>

        <View style={{ 
          flex:1, 
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: SIZES.padding,
          }}>
            <Text style={{
              flex: 1, 
              color: COLORS.secondary,
              ...FONTS.h4
            }}>
              Almost 2 weeks of growing time
            </Text>
            <Image 
              source={icons.downArrow}
              resizeMode='contain'
              style={{
                tintColor: COLORS.secondary,
                marginLeft: SIZES.base,
                width: 20,
                height: 20,
              }}
            />
        </View>
      </View>
    )
  }

  function renderHeder(){
    return(
      <View style={{
        position: 'absolute',
        top: 50,
        left: SIZES.padding,
        right: SIZES.padding,
      }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{flex:1}}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.5)'
              }}
              onPress={() => {navigation.goBack()}}
            >
              <Image 
                source={icons.back}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 20
                }}
              />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            style={{
              flex:1,
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
            onPress={ () => {} }
          >
            <Image 
              source={icons.focus}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  // end of Render 

  return(
    <Container>
      <Banner>
        <Image 
          source={images.bannerBg}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </Banner>

      {/* Requirements */}
      <RequirementsWrapper>
          <Title style={{  ...FONTS.h1}}>Requirements</Title>
          {renderRequirementsBar()}
          {renderRequirements()}
          {renderFooter()}
      </RequirementsWrapper>

      {renderHeder()}
    </Container>
  )
}

export default PlantDetail;