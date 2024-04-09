import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme, View, Image, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          header: () => (
              <View style={styles.headerBar}>
                  <Image source={require('../../assets/images/LOGO-01.png')} style={styles.logo} />
              </View>
          )
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Détails',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          header: () => (
              <View style={styles.headerBar}>
                  <Image source={require('../../assets/images/LOGO-01.png')} style={styles.logo} />
              </View>
          )
        }}
      />
      <Tabs.Screen
          name="three"
          options={{
              title: 'Trois',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              header: () => (
                  <View style={styles.headerBar}>
                      <Image source={require('../../assets/images/LOGO-01.png')} style={styles.logo} />
                  </View>
              )
          }}
      />
      <Tabs.Screen
          name="four"
          options={{
              title: 'Quatre',
              tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              header: () => (
                  <View style={styles.headerBar}>
                      <Image source={require('../../assets/images/LOGO-01.png')} style={styles.logo} />
                  </View>
              )
          }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        height: '70%',
        width: '70%',
        marginTop: 20
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#FEF9F5',
        width: '100%'
    }
});