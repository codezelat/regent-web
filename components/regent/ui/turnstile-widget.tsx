"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      action?: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  remove?: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function TurnstileWidget({
  siteKey,
  action = "contact",
  resetSignal,
}: {
  siteKey?: string;
  action?: string;
  resetSignal?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const previousResetSignalRef = useRef<string | undefined>(resetSignal);
  const [scriptReady, setScriptReady] = useState(false);
  const setToken = (token: string) => {
    if (inputRef.current) {
      inputRef.current.value = token;
    }
  };

  useEffect(() => {
    if (!siteKey || !scriptReady || !window.turnstile || !containerRef.current || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action,
      callback: setToken,
      "expired-callback": () => setToken(""),
      "error-callback": () => setToken(""),
    });

    return () => {
      if (widgetIdRef.current && window.turnstile?.remove) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, [action, scriptReady, siteKey]);

  useEffect(() => {
    if (previousResetSignalRef.current === resetSignal) {
      return;
    }

    previousResetSignalRef.current = resetSignal;

    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.remove?.(widgetIdRef.current);
      widgetIdRef.current = null;
      setToken("");

      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }

      if (siteKey && containerRef.current) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          action,
          callback: setToken,
          "expired-callback": () => setToken(""),
          "error-callback": () => setToken(""),
        });
      }
    }
  }, [action, resetSignal, siteKey]);

  if (!siteKey) {
    return null;
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        async
        defer
        onLoad={() => setScriptReady(true)}
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} />
      <input name="cf-turnstile-response" ref={inputRef} type="hidden" />
    </>
  );
}
