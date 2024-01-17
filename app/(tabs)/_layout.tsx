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
          // Header for a modal button
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
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
    </Tabs>
  );
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        height: '80%',
        width: '80%'
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 130,
        backgroundColor: '#FEF9F5',
        width: '100%'
    }
});