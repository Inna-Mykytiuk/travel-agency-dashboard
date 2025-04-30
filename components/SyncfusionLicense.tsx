import { useEffect } from 'react';
import { registerLicense } from "@syncfusion/ej2-base";

export function SyncfusionLicense() {
  useEffect(() => {
    // Код виконується тільки на клієнті після монтування компонента
    registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);
  }, []);

  return null; // Компонент нічого не рендерить
}