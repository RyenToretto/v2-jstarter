declare module '*.vue' {
  import { type defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}
