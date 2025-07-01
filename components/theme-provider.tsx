    'use client'; // This component must be a Client Component

    import * as React from 'react';
    import { ThemeProvider as NextThemesProvider } from 'next-themes';
    import { type ThemeProviderProps } from 'next-themes';

    // This ThemeProvider wraps your application to provide dark/light mode functionality.
    // It uses 'next-themes' under the hood.
    // This component should be placed in `src/components/theme-provider.tsx`.
    export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
      return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
    }
    