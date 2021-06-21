declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    count: number
  }
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
