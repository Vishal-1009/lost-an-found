import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";
import HomeScreen from "./Screens/Home";
import BottomTabNavigator from "./components/BottomTabNavigater";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    BottomTab: {
      screen: BottomTabNavigator
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);