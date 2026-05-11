import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Code2, Globe, Cloud, Database, Layers } from 'lucide-react-native';

import TopicScreen from './components/TopicScreen';

// Import JSON data
import csharpData from './data/csharp.json';
import apiData from './data/api.json';
import azureData from './data/azure.json';
import sqlServerData from './data/sqlserver.json';
import linqData from './data/linq.json';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <SafeAreaView style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let icon;
              const size = 18;
              if (route.name === 'C#') icon = <Code2 size={size} color={color} />;
              else if (route.name === 'API') icon = <Globe size={size} color={color} />;
              else if (route.name === 'Azure') icon = <Cloud size={size} color={color} />;
              else if (route.name === 'SQL') icon = <Database size={size} color={color} />;
              else if (route.name === 'LINQ') icon = <Layers size={size} color={color} />;
              return icon;
            },
            tabBarActiveTintColor: '#22d3ee',
            tabBarInactiveTintColor: '#64748b',
            tabBarIndicatorStyle: {
              backgroundColor: '#22d3ee',
              height: 3,
            },
            tabBarStyle: {
              backgroundColor: '#0f172a',
              borderBottomColor: '#1e293b',
              borderBottomWidth: 1,
              elevation: 0,
              shadowOpacity: 0,
            },
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: 'bold',
              textTransform: 'none',
            },
            tabBarShowIcon: true,
          })}
        >
          <Tab.Screen name="C#">
            {() => <TopicScreen data={csharpData} title="C# Interview" />}
          </Tab.Screen>
          <Tab.Screen name="API">
            {() => <TopicScreen data={apiData} title="API & Web Services" />}
          </Tab.Screen>
          <Tab.Screen name="Azure">
            {() => <TopicScreen data={azureData} title="Microsoft Azure" />}
          </Tab.Screen>
          <Tab.Screen name="SQL">
            {() => <TopicScreen data={sqlServerData} title="SQL Server" />}
          </Tab.Screen>
          <Tab.Screen name="LINQ">
            {() => <TopicScreen data={linqData} title="LINQ Queries" />}
          </Tab.Screen>
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
});
