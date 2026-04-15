import {StyleSheet} from 'react-native';
import {colors} from '../../utills/constants';

export const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
  },
});
