export {};

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initData?: string;
        initDataUnsafe?: any;
        close: () => void;
        expand: () => void;
        ready: () => void;
        sendData?: (data: string) => void;
        MainButton?: any;
        BackButton?: any;
        HapticFeedback?: any;
        CloudStorage?: any;
      };
    };
  }
}