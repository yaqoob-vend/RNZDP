import DeviceInfo from 'react-native-device-info';

export async function isEmulator(): Promise<boolean> {
  return await DeviceInfo.isEmulator();
}

export function getBuildNumber(): string {
  return DeviceInfo.getBuildNumber();
}

export function getBundleId(): string {
  return DeviceInfo.getBundleId();
}

export function getBugetFontScale(): Promise<number> {
  return DeviceInfo.getFontScale();
}
