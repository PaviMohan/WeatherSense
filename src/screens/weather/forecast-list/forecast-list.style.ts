import {StyleSheet} from 'react-native';
import {colors} from '../../../utills/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 8,
    padding: 16,
    gap: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listContentContainer: {
    gap: 10,
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
