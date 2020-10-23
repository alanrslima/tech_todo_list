import AsyncStorage from '@react-native-community/async-storage';

export class Storage {
  // >>>>>>>>>>>>>>>>>> GETS <<<<<<<<<<<<<<<<<<<<<<<<<<<<
  // Busca um valor boolean no storage
  static getStorageBoolean = async (key) => {
    const data = await AsyncStorage.getItem(key);
    return data === 'true';
  };

  // Busca um valor string no storage
  static getStorageString = async (key) => {
    const data = await AsyncStorage.getItem(key);
    return data || null;
  };

  // Busca um object no storage
  static getStorageObject = async (key) => {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data) || null;
  };

  static getStorageArray = async (key) => {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data) || [];
  };

  // >>>>>>>>>>>>>>>>>>> SETS <<<<<<<<<<<<<<<<<<<<<<<<<<<<

  // Set valor boolean no storage
  static setStorageBoolean = async (key, value) => {
    const data = value.toString();
    await AsyncStorage.setItem(key, data);
  };

  // Set valor string no storage
  static setStorageString = async (key, value) => {
    await AsyncStorage.setItem(key, value);
  };

  /**
   * @param {*} key
   * @param {*} value
   * @returns Boolean
   */
  static setStorageObject = async (key, value) => {
    try {
      const data = JSON.stringify(value);
      await AsyncStorage.setItem(key, data);
      return true;
    } catch (error) {
      return false;
    }
  };

  static setStorageArray = async (key, value) => {
    try {
      const data = JSON.stringify(value);
      await AsyncStorage.setItem(key, data);
      return true;
    } catch (error) {
      return false;
    }
  };

  // >>>>>>>>>>>>>>>>>>> REMOVE <<<<<<<<<<<<<<<<<<<<<<<<<<<<
  static removeStorageItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  };
}

export const keys = {
  CURRENT_THEME: '@tech_current_theme',
};
