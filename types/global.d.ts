import type { ComponentRenderProxy, VNode } from 'vue';
import type { AxiosInstance } from 'axios'

declare global {
  declare type Recordable<T = any> = Record<string, T>;
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

  declare interface ViteEnv {
    VITE_APP_PROJECT_NAME: string;
    VITE_APP_PORT: number;
    VITE_APP_UUAP_PROD: string;
    VITE_APP_GA_ID: string;
    VITE_APP_PUBLIC_PATH: string;
    VITE_APP_OUTPUT_DIR: string;
    VITE_APP_CDN: string;
    VITE_APP_API_BASE_URL: string;
    VITE_APP_API_PROXY: string;
    VITE_DROP_CONSOLE: boolean;
  }

  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  interface Window {
    axios: AxiosInstance
  }

  namespace JSX {
    type Element = VNode;
    type ElementClass = ComponentRenderProxy;
    interface ElementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
}
