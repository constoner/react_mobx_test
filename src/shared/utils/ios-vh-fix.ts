import { iosChecker } from './ios-checker';

const iosVhFix = () => {
  // @ts-ignore
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    if (iosChecker()) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      window.addEventListener('resize', function () {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    }
  }
};

export { iosVhFix };
