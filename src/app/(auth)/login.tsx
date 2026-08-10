import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TEST_EMAIL = "tenant@zhaohe.tw";
const TEST_PASSWORD = "123456";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    const isValidEmail = email.trim().toLowerCase() === TEST_EMAIL;
    const isValidPassword = password === TEST_PASSWORD;

    if (!isValidEmail || !isValidPassword) {
      setLoginError("電子郵件或密碼不正確，請重新輸入。");
      return;
    }

    setLoginError("");
    router.replace("/(tenant)");
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.header}>
          <Pressable
            accessibilityLabel="Go back"
            hitSlop={12}
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#222222" />
          </Pressable>
          <Text style={styles.headerTitle}>房客登入</Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.brand}>兆和租屋</Text>
          <Text style={styles.title}>歡迎回來</Text>
          <Text style={styles.subtitle}>登入以查看您的租屋資訊</Text>
          <View style={styles.testAccountCard}>
            <Text style={styles.testAccountTitle}>測試帳號</Text>
            <Text style={styles.testAccountText}>{TEST_EMAIL}</Text>
            <Text style={styles.testAccountText}>密碼：{TEST_PASSWORD}</Text>
          </View>

          <View style={styles.fields}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>電子郵件</Text>
              <TextInput
                value={email}
                onChangeText={(value) => {
                  setEmail(value);
                  setLoginError("");
                }}
                placeholder={TEST_EMAIL}
                placeholderTextColor="#717171"
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
                returnKeyType="next"
                style={styles.input}
              />
            </View>

            <View style={[styles.inputContainer, styles.passwordContainer]}>
              <View style={styles.passwordInputArea}>
                <Text style={styles.inputLabel}>密碼</Text>
                <TextInput
                  value={password}
                  onChangeText={(value) => {
                    setPassword(value);
                    setLoginError("");
                  }}
                  placeholder="請輸入密碼"
                  placeholderTextColor="#717171"
                  autoComplete="password"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  returnKeyType="done"
                  onSubmitEditing={handleLogin}
                  style={styles.input}
                />
              </View>
              <Pressable
                accessibilityLabel={
                  showPassword ? "Hide password" : "Show password"
                }
                hitSlop={10}
                onPress={() => setShowPassword((current) => !current)}
                style={styles.eyeButton}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={22}
                  color="#222222"
                />
              </Pressable>
            </View>
          </View>

          {loginError ? (
            <Text accessibilityRole="alert" style={styles.errorText}>
              {loginError}
            </Text>
          ) : null}

          <Pressable
            onPress={handleLogin}
            disabled={!email.trim() || !password}
            style={({ pressed }) => [
              styles.primaryButton,
              (!email.trim() || !password) && styles.disabledButton,
              pressed && styles.pressedButton,
            ]}
          >
            <Text style={styles.primaryButtonText}>繼續</Text>
          </Pressable>

          <Pressable style={styles.forgotButton}>
            <Text style={styles.forgotText}>忘記密碼？</Text>
          </Pressable>

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>或</Text>
            <View style={styles.divider} />
          </View>

          <SocialButton
            provider="google"
            label="使用 Google 繼續"
            onPress={() => console.log("Google login")}
          />
          <SocialButton
            provider="apple"
            label="使用 Apple 繼續"
            onPress={() => console.log("Apple login")}
          />

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

type SocialButtonProps = {
  provider: "google" | "apple";
  label: string;
  onPress: () => void;
};

function SocialButton({ provider, label, onPress }: SocialButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.socialButton,
        pressed && styles.socialButtonPressed,
      ]}
    >
      <View style={styles.socialIconSlot}>
        {provider === "google" ? (
          <Image
            source={require("../../../assets/images/google-g.png")}
            style={styles.googleIcon}
            resizeMode="contain"
          />
        ) : (
          <Ionicons name="logo-apple" size={23} color="#000000" />
        )}
      </View>

      <Text style={styles.socialButtonText}>{label}</Text>

      <View style={styles.socialSpacer} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
  },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#DDDDDD",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: "#222222",
    fontSize: 16,
    fontWeight: "600",
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 28,
  },
  title: {
    color: "#222222",
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "700",
    letterSpacing: 0,
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 18,
    color: "#717171",
    fontSize: 15,
    lineHeight: 24,
    letterSpacing: 0,
  },
  testAccountCard: {
    marginBottom: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#F7F7F7",
  },
  testAccountTitle: {
    marginBottom: 4,
    color: "#222222",
    fontSize: 13,
    fontWeight: "700",
  },
  testAccountText: {
    color: "#717171",
    fontSize: 13,
    lineHeight: 20,
  },
  fields: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#B0B0B0",
    borderRadius: 12,
  },
  inputContainer: {
    minHeight: 64,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#B0B0B0",
  },
  passwordInputArea: {
    flex: 1,
    justifyContent: "center",
  },
  inputLabel: {
    color: "#717171",
    fontSize: 12,
    marginBottom: 2,
  },
  input: {
    minHeight: 25,
    padding: 0,
    color: "#222222",
    fontSize: 16,
  },
  eyeButton: {
    width: 44,
    height: 44,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  errorText: {
    marginTop: 10,
    color: "#C13515",
    fontSize: 13,
    lineHeight: 20,
  },
  primaryButton: {
    minHeight: 52,
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#FF385C",
  },
  disabledButton: {
    backgroundColor: "#D8D8D8",
  },
  pressedButton: {
    opacity: 0.82,
    transform: [
      {
        scale: 0.99,
      },
    ],
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  forgotButton: {
    alignSelf: "center",
    padding: 14,
  },
  forgotText: {
    color: "#222222",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  divider: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#B0B0B0",
  },
  dividerText: {
    marginHorizontal: 16,
    color: "#717171",
    fontSize: 13,
  },
  socialButton: {
    minHeight: 52,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#222222",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  socialButtonPressed: {
    backgroundColor: "#F7F7F7",
  },
  socialIconSlot: {
    width: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  googleIcon: {
    width: 21,
    height: 21,
  },
  socialButtonText: {
    flex: 1,
    textAlign: "center",
    color: "#222222",
    fontSize: 15,
    fontWeight: "600",
  },
  socialSpacer: {
    width: 26,
  },
  brand: {
    fontFamily: Platform.select({
      ios: "PingFang TC",
      android: "sans-serif",
      default: "sans-serif",
    }),
    color: "#1C1C1C",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "700",
    letterSpacing: 0,
    marginBottom: 24,
  },
});
