import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItem = (key: string) => {
  return new Promise((resolve, reject) => {
    try {
      AsyncStorage.getItem(key)
        .then(value => {
          if (value) {
            resolve(JSON.parse(value));
          } else {
            reject(false);
          }
        })
        .catch(error => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const setItem = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));

    return true;
  } catch (error) {
    return false;
  }
};

export const removeItem = async (key, callback = () => {}) => {
  try {
    await AsyncStorage.removeItem(key, callback);
    return true;
  } catch (error) {
    return false;
  }
};
