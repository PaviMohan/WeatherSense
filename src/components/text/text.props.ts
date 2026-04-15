import {Text, TextStyle} from 'react-native';

export interface TextProps {
  children: React.ReactNode;
  overrideStyles?: TextStyle;
  overrideProps?: Omit<React.ComponentProps<typeof Text>, 'style'>;
}
