import { Redirect } from "expo-router";

export default function Index() {
  // TODO: Replace this with the real authentication state.
  const isAuthenticated = false;

  return (
    <Redirect href={isAuthenticated ? "/(tenant)" : "/(auth)/login"} />
  );
}
