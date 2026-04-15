import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 8,
  },
  basicInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationInfo: {
    alignItems: 'flex-start',
  },
  dayInfo: {
    alignItems: 'flex-end',
  },
  climateInfo: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temperatureInfo: {
    alignItems: 'flex-start',
  },
  climateCondition: {
    alignItems: 'center',
  },
  widgetContainer: {
    gap: 2,
    paddingTop: 10,
  },
  columnWrapperStyle: {gap: 2},
  temperatureTextStyle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.highlightPrimary,
    lineHeight: 42,
  },
  apparentTemperatureTextStyle: {
    fontSize: 16,
  },
  climateConditionTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 32,
  },
});
