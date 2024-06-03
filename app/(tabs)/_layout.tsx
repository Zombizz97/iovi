import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, Image, StyleSheet} from 'react-native';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {

  return (
      <Tabs>
          <Tabs.Screen
              name="index"
              options={{
                  title: 'Accueil',
                  tabBarIcon: ({ color }) => <FontAwesome name="info" size={28} color={color} />,
                  header: () => (
                      <View style={styles.headerBar}>
                          <Image source={require('../../assets/images/LOGO-01.png')} style={styles.logo} />
                      </View>
                  ),
                  tabBarActiveTintColor: '#FFD49B',
              }}
          />
          <Tabs.Screen
              name="two"
              options={{
                  title: 'Ateliers',
                  tabBarIcon: ({ color }) => <FontAwesome name="calendar" size={28} color={color} />,
                  header: () => (
                      <View style={styles.headerBar}>
                          <Image source={require('../../assets/images/LOGO-01.png')} style={styles.logo} />
                      </View>
                  ),
                  tabBarActiveTintColor: '#F8CDB4',
              }}
          />
          <Tabs.Screen
              name="three"
              options={{
                  title: 'Vote',
                  tabBarIcon: ({ color }) => <Ionicons name="checkmark-circle" size={28} color={color} />,
                  header: () => (
                      <View style={styles.headerBar}>
                          <Image source={require('../../assets/images/LOGO-01.png')} style={styles.logo} />
                      </View>
                  ),
                  tabBarActiveTintColor: '#DEA5FF',
              }}
          />
          <Tabs.Screen
              name="four"
              options={{
                  title: 'Résumé',
                  tabBarIcon: ({ color }) => <Ionicons name="document-text" size={28} color={color} />,
                  header: () => (
                      <View style={styles.headerBar}>
                          <Image source={require('../../assets/images/LOGO-01.png')} style={styles.logo} />
                      </View>
                  ),
                  tabBarActiveTintColor: '#AEA2FC',
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