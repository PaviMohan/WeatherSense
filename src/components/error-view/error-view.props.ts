import {IconSvgElement} from '@hugeicons/react-native';

export interface ErrorViewProps {
  message: string;
  subMessage: string;
  icon: IconSvgElement;
  onRetry: () => void;
}
