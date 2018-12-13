import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import AddPostScreen from "../screens/AddPostScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Početna",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />
};

const SearchStack = createStackNavigator({
  Search: SearchScreen
});

SearchStack.navigationOptions = {
  tabBarLabel: "Pretraga",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search1" />
};

const AddPostStack = createStackNavigator({
  AddPost: AddPostScreen
});

AddPostStack.navigationOptions = {
  tabBarLabel: "Dodaj",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="pluscircleo" />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "Kalendar",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="calendar" />
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Profil",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="profile" />
};

export default createBottomTabNavigator({
  HomeStack,
  SearchStack,
  AddPostStack,
  LinksStack,
  SettingsStack
});
