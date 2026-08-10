import { StyleSheet, Text, View } from "react-native";

export default function PaymentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>繳費</Text>
      <Text style={styles.subtitle}>租金與繳費紀錄會顯示在這裡。</Text>
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
