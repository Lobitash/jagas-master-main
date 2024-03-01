import { useRef, useEffect, useState } from "react";

import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
  LAPTOP_BREAKPOINT,
} from "./constants";
import { isBrowser } from "./helper";

export interface ScreenWidth {
  isTabletWidth: boolean;
  isMobileWidth: boolean;
  isLaptopWidth: boolean;
}

const defaultScreenWidth = {
  isTabletWidth: false,
  isMobileWidth: false,
  isLaptopWidth: false,
};

// event listener hook
export function useEventListener(
  eventName: string,
  handler: (args: any) => void
) {
  if (!isBrowser()) {
    return;
  }
  const savedHandler = useRef<typeof handler>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = window && window.addEventListener;
    if (!isSupported) return;

    //@ts-ignore
    const eventListener = (event: any) => savedHandler.current(event);
    window.addEventListener(eventName, eventListener);

    return () => {
      window.removeEventListener(eventName, eventListener);
    };
  }, [eventName, window]);
}

// checks screen width
export function useCheckScreenWidth(): ScreenWidth {
  if (!isBrowser()) {
    return defaultScreenWidth;
  }
  const [screenWidth, setScreenWidth] = useState(defaultScreenWidth);
  const hasMounted = useHasMounted();

  const checkScreenWidth = () => {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      setScreenWidth({
        ...defaultScreenWidth,
        isLaptopWidth: true,
        isTabletWidth: true,
        isMobileWidth: true,
      });
      return;
    }
    if (window.innerWidth <= TABLET_BREAKPOINT) {
      setScreenWidth({
        ...defaultScreenWidth,
        isLaptopWidth: true,
        isTabletWidth: true,
      });
      return;
    }
    if (window.innerWidth <= LAPTOP_BREAKPOINT) {
      setScreenWidth({
        ...defaultScreenWidth,
        isLaptopWidth: true,
      });
      return;
    }
    if (window.innerWidth > LAPTOP_BREAKPOINT) {
      setScreenWidth(defaultScreenWidth);
      return;
    }
  };

  useEventListener("resize", checkScreenWidth);

  useEffect(() => {
    checkScreenWidth();
  }, []);

  useEffect(() => {
    if (hasMounted) {
      checkScreenWidth();
    }
  }, [hasMounted]);

  return screenWidth;
}

// check if component has been mounted
export function useHasMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return false;
  }

  return mounted;
}
