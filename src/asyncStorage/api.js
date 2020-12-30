import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

export const readData = async (key) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (e) {
    // saving error
  }
}