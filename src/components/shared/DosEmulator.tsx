import React, { useEffect, useRef } from "react";
import { DosPlayer as Instance, DosPlayerFactoryType } from "js-dos";

declare const Dos: DosPlayerFactoryType;

interface PlayerProps {
  bundleUrl: string;
}

export default function DosEmulator({ bundleUrl }: PlayerProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const dosRef = useRef<Instance | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      if (!rootRef.current) return;

      const instance = Dos(rootRef.current);
      dosRef.current = instance;
      instance.run(bundleUrl, "./doom");
    }, 0);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (dosRef.current) {
        dosRef.current.stop();
      }
    };
  }, [bundleUrl]);

  return <div ref={rootRef} style={{ width: "100%", height: "100%" }} />;
}
