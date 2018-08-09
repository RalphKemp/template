import { TweenMax } from 'gsap/TweenMax';

export function animateIn() {
  TweenMax.to('#F', 0.2, { left: 0 });
  TweenMax.to('#T', 0.2, { left: 0 });
  TweenMax.to('#O', 0.2, { opacity: 1 });
  TweenMax.to('#E', 0.2, { opacity: 1 });
}

export function animateOut() {
  TweenMax.to('#F', 0.2, { left: 21 });
  TweenMax.to('#T', 0.2, { left: -18 });
  TweenMax.to('#O', 0.2, { opacity: 0 });
  TweenMax.to('#E', 0.2, { opacity: 0 });
}
