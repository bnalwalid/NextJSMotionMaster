import { UseAlertsProvider } from './useAlerts';
import { UseThemeProvider } from './useTheme';
import { WebpProvider } from './useWebp';

interface IProvidersProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<IProvidersProps> = ({ children }) => (
  <UseThemeProvider>
    <UseAlertsProvider>
      <WebpProvider>{children}</WebpProvider>
    </UseAlertsProvider>
  </UseThemeProvider>
);

export default AppProvider;
