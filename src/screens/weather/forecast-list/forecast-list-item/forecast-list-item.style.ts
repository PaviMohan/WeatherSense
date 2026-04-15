import {StyleSheet} from 'react-native';
import {colors} from '../../../../utills/constants';

export const styles = StyleSheet.create({
  container: {
    gap: 5,
    padding: 10,
    backgroundColor: colors.widgetBackgroundPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 90,
    borderWidth: 1,
    borderColor: colors.widgetBackgroundPrimary,
  },
  selectedContainer: {
    backgroundColor: colors.highlightPrimary,
    borderColor: colors.light,
  },
  selectedTextStyle: {
    fontWeight: 'bold',
  },
});
