import { StyleSheet, Text, View } from "react-native";

export default function TenantHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>房客首頁</Text>
      <Text style={styles.subtitle}>您的租屋資訊會顯示在這裡。</Text>
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
