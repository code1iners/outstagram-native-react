import { Platform } from "react-native";
import {
  PLATFORM_ANDROID,
  PLATFORM_IOS,
  PLATFORM_MACOS,
  PLATFORM_WEB,
  PLATFORM_WINDOW,
} from "./constants";

export const isAndroid = () => {
  return Platform.OS === PLATFORM_ANDROID;
};

export const isIos = Platform.OS === PLATFORM_IOS;

export const isWeb = () => {
  return Platform.OS === PLATFORM_WEB;
};

export const isMacos = () => {
  return Platform.OS === PLATFORM_MACOS;
};

export const isWindow = () => {
  return Platform.OS === PLATFORM_WINDOW;
};
