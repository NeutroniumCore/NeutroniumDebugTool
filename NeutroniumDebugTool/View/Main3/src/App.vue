<template>
  <div class="ui grid">
    <div class="center aligned twelve wide column">
      <div class="ui main menu">
      <!--class="ui small basic icon buttons"-->
          <icon-command :command="DebugBrowser" :class="{'is-active': IsDebuggingVm}" icon="bars" nome="Inspect"></icon-command>
          <icon-command  v-if="VmDebug" :command="DebugWindow" icon="bug" nome="Vm debugger"></icon-command>
          <icon-command :command="ShowInfo" icon="info circle" nome="About"></icon-command>
        </div>
    </div>
      
    <div class="right floated left aligned four wide column">
    <div class="ui label">
      <span>Neutronium {{ComponentName}}</span>        
      <img class="logo" src="./assets/logo.png">
    </div>
    </div>
  </div>
</template>

<script>
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
@import '~dist/semantic.css';

.logo {
  height: 50px;
}
</style>
