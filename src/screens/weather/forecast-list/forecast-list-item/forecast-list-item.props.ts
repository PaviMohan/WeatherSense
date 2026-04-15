import {IconSvgElement} from '@hugeicons/react-native';

export interface ForecastListItemProps {
  index: number;
  id: number;
  day: string;
  temperature: string;
  //   condition: string;
  isSelected?: boolean;
  weatherIcon: IconSvgElement;
  onItemPress: (id: number, index: number) => void;
}
