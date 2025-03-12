// import { AnalyticsProvider } from '@forge/analytics';
import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider } from './providers/theme';
import { Toaster } from './shad-components/ui/sonner';
import { TooltipProvider } from './shad-components/ui/tooltip';

type DesignSystemProviderProperties = ThemeProviderProps;

// Analytics is disabled by default
export const DesignSystemProvider = ({
  children,
  ...properties
}: DesignSystemProviderProperties) => (
  <ThemeProvider {...properties}>
    {/* <AnalyticsProvider> */}
    <TooltipProvider>{children}</TooltipProvider>
    <Toaster />
    {/* </AnalyticsProvider> */}
  </ThemeProvider>
);
