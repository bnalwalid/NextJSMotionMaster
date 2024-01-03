import { useRouter } from 'next/navigation';

import { IAnimateRouteParams, IUseAnimatedRouter } from './types';

export default function useAnimatedRouter(): IUseAnimatedRouter {
  const router = useRouter();

  const viewTransitionsStatus = (): string => {
    const extendedDocument = document as IExtendedDocument;

    let status = "Your browser doesn't support View Transitions";

    if (extendedDocument?.startViewTransition) {
      status = 'Your browser supports View Transitions';
    }

    return status;
  };

  // Navigate to the new route
  const animatedRoute = ({ href, afterStartViewTransition, beforeStartViewTransition }: IAnimateRouteParams): void => {
    const extendedDocument = document as IExtendedDocument;

    if (!extendedDocument.startViewTransition) return router.push(href);

    if (beforeStartViewTransition) beforeStartViewTransition();

    extendedDocument.startViewTransition(() => {
      if (afterStartViewTransition) afterStartViewTransition();

      router.push(href);
    });
  };

  return { animatedRoute, viewTransitionsStatus };
}
