import React from 'react';

import Link from 'next/link';

import useAnimatedRouter from './index';
import { IAnimateRouteParams } from './types';

interface IAnimatedLink extends IAnimateRouteParams {
  href: string;
  children: React.ReactNode;
}

const AnimatedLink: React.FC<IAnimatedLink> = ({ href, beforeStartViewTransition, afterStartViewTransition, children }) => {
  const { animatedRoute } = useAnimatedRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        animatedRoute({ beforeStartViewTransition, href, afterStartViewTransition });
      }}
      passHref
    >
      {children}
    </Link>
  );
};

export default AnimatedLink;
