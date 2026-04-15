import {StyleSheet} from 'react-native';
import {colors} from '../../utills/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    gap: 5,
  },
  iconContainer: {
    backgroundColor: colors.backgroundSecondary,
    padding: 8,
    borderRadius: 24,
    borderColor: colors.widgetBackgroundPrimary,
    borderWidth: 1,
  },
  infoContainer: {
    alignItems: 'center',
  },
  valueTextStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
