'use client';
import React from 'react';
import Link from 'next/link';
import DarkLightToggle from '@/components/DarkLightToggle';

function HeaderWrapper({initialTheme}) {
  const [theme, setTheme] = React.useState(initialTheme);

  return (
    <header className="site-header">
      <Link href="">
       Theme-{theme}
      </Link>
      <DarkLightToggle theme={theme} setTheme={setTheme} />
    </header>
  );
}

export default HeaderWrapper;
