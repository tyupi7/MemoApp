import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Hello World!!</Text>
        <button
         title="Go to Details"
         onPress={()=> this.props.navigation.navigate('Details')}
         />

        <StatusBar style="auto" />
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class DetailsScreen extends React.Component{
  render(){
    return(
      <view style={styles.container}>
        <text>Detail Screen</text>
      </view>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName:'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component{
  render(){
    return<AppContainer />;
  }
}
