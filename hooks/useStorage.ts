import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';

export enum EnumStorageItems {
    todo = 'todo'
}

export const useStorage = () => {
  const setItemStorage = useCallback(
    async (name: EnumStorageItems, item: any) => {
      try {
        await AsyncStorage.setItem(name, JSON.stringify(item));
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const getItemStorage = useCallback(
    async <T>(name: EnumStorageItems): Promise<T | undefined> => {
      try {
        const item = await AsyncStorage.getItem(name);

        if (!item) {
          return undefined;
        }

        const currentValue = JSON.parse(item);
        return currentValue;
      } catch (error) {
        console.log(error);
        return undefined;
      }
    },
    []
  );

  const mergeStorageItem = useCallback(
    async (name: EnumStorageItems, item: any) => {
      try {
        await AsyncStorage.mergeItem(name, JSON.parse(item));
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const removeStorageItem = useCallback(async (name: EnumStorageItems) => {
    try {
      await AsyncStorage.removeItem(name);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const clearStorage = useCallback(async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getMultipleItens = useCallback(async (key: EnumStorageItems[]) => {
    try {
      const savedData = await AsyncStorage.multiGet(key);
      return savedData;
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    setItemStorage,
    getItemStorage,
    mergeStorageItem,
    removeStorageItem,
    clearStorage,
    getMultipleItens,
  };
};