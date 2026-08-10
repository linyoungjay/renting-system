import { StyleSheet, Text, View } from "react-native";

export default function MaintenanceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>報修</Text>
      <Text style={styles.subtitle}>您可以在這裡新增報修並查看處理進度。</Text>
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
    textAlign: "center",
  },
});
