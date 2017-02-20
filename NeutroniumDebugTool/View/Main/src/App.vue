<template>
  <div uk-grid  class="uk-grid">
      <div class="uk-width-expand uk-flex uk-flex-center uk-container uk-flex-middle">
        <ul class="uk-iconnav">
          <li> 
            <icon-command :command="DebugBrowser" icon="bars" detail="Inspect"></icon-command>
          </li>
          <li v-if="VmDebug">
            <icon-command :command="DebugWindow" icon="bug" detail="Vm debugger"></icon-command>
         </li>
          <li>
            <icon-command :command="ShowInfo" icon="info-circle" detail="About"></icon-command>
          </li>
        </ul>
      </div>
      <div class="uk-width-auto  uk-margin">
        <span class="uk-label uk-label-success">Neutronium {{ComponentName}}</span>        
        <img class="logo" src="./assets/logo.png">
      </div>
  </div>
</template>

<script>
import 'uikit/dist/css/uikit.min.css'
import uikit from 'uikit/dist/js/uikit.min'
import 'font-awesome/css/font-awesome.css'
import iconCommand from './components/icon-command'

const props={
  viewModel: Object,
};

export default {
  components:{
    iconCommand
  },
  name: 'app',
  props,
  data () {
    return this.viewModel
  }
}
</script>

<style>
.logo {
  height: 50px;
}
</style>
