export interface IAnimateRouteParams {
  href: string;
  beforeStartViewTransition?: () => void;
  afterStartViewTransition?: () => void;
}

export interface IUseAnimatedRouter {
  animatedRoute: (params: IAnimateRouteParams) => void;
  viewTransitionsStatus: () => string;
}
