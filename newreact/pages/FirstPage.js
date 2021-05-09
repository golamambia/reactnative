// Switch Screen out of the Navigation Drawer
// https://aboutreact.com/switch-screen-out-of-the-navigation-drawer-in-react-native/

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            Switch Screen out of the Navigation Drawer
            {'\n'}
            This is the First Page ambi
          </Text>
          {/* <Text style={styles.textStyle}>
          Values passed from Entry page: {route.params.paramKey}
        </Text> */}
          <Text
            style={{
              marginTop: 30,
              fontSize: 16,
              textAlign: 'center'
            }}>
            Switch to an external screen without navigation drawer
          </Text>
          <Button
            title="Open Screen Out of Navigation Drawer"
            onPress={() => navigation.navigate('ScreenExternal')}
          />
          <Text
            style={{
              marginTop: 30,
              fontSize: 16,
              textAlign: 'center'
            }}>
            Switch to an internal screen with navigation drawer
          </Text>
          <Button
            title="Open Screen with Navigation Drawer"
            onPress={() => navigation.navigate('ScreenInternal')}
          />
        </View>
        <Text style={styles.footerHeading}>
          React Navigation Drawer with Sectioned Menu
        </Text>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});

export default FirstPage;