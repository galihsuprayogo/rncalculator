import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ILLogo } from '../../assets/illustration';
import { colors } from '../../utils/colors';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1500);
  }, [navigation]);

  return (
    <View style={styles.wrapper}>
      <Image source={ILLogo} style={{ height: 50, width: 250 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.logo,
  },
});
export default Splash;
