import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, ScrollView, KeyboardAvoidingView, FlatList, Image } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from '../components/CustomSideBarMenu'; 
import MyHeader from '../components/MyHeader';
import  HomeScreen from '../screens/HomeScreen'
import  InventoryScreen from '../screens/InventoryScreen'
import  SearchScreen from '../screens/SearchScreen'

export const AppDrawerNavigator= createDrawerNavigator({
    Home:{
        screen: HomeScreen
    },
    Inventory:{
        screen: InventoryScreen
    },

    Search:{
        screen: SearchScreen
    }
},

{
    contentComponent: CustomSideBarMenu
},
{ 
    initialRouteName: 'Home'


})
