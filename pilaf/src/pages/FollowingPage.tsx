import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, fontFamily } from "../constants/dogeStyle";
import { FollowingOnlineController } from "../modules/following/FollowingOnlineController";

export const FollowingPage: React.FC = () => {
  return <FollowingOnlineController />;
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.primary900,
  },
});
