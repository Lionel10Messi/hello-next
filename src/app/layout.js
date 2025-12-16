import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';

import { LIGHT_COLORS, DARK_COLORS } from '@/constants';

import DarkLightToggle from '@/components/DarkLightToggle';
import HeaderContentWrapper from '@/components/HeaderWrapper';


import './styles.css';

async function RootLayout({ children }) {
  const savedTheme = (await cookies()).get('color-theme');
  const theme = savedTheme?.value || 'light';

  const themeColors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  return (
    <html lang="en" data-color-theme={theme} style={themeColors}>
      <body>
        <HeaderContentWrapper initialTheme={theme} />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
