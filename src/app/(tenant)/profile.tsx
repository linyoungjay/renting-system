import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>我的資料</Text>
      <Text style={styles.subtitle}>房客個人資料會顯示在這裡。</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#FFFFFF",
  },
  title: {
    color: "#222222",
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 8,
    color: "#717171",
    fontSize: 15,
  },
});
