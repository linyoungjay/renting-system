import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TenantLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#222222",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "總覽",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "繳費",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "card" : "card-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="maintenance"
        options={{
          title: "報修",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "construct" : "construct-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "帳戶",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
