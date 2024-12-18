import type {
  ComponentRenderProxy,
  VNode,
  VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
} from 'vue';

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };
  declare type Recordable<T = any> = Record<string, T>;

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

  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode;
    // tslint:disable no-empty-interface
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

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
