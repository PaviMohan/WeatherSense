import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundSecondary,
  },
  retryButton: {
    padding: 10,
  },
});
