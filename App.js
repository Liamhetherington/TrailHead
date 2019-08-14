import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems, createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { Header } from 'react-native-elements';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import PlanScreen from './screens/PlanScreen';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'TrailHead', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <DrawerNavigator />
      </View>  
    )
  }
}




const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1}}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Explore: ExploreScreen,
    Planner: PlanScreen
  }, 
  {
    contentComponent: CustomDrawerComponent
  }
);

const DrawerNavigator = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})