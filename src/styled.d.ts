import 'styled-components';
import { theme } from './assets/globalStyles/theme';

type AppTheme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends AppTheme {}
}
