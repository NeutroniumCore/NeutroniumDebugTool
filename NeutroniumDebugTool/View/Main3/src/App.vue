<template>
  <div class="ui grey inverted vertical footer segment main">
    <div class="ui grid inverted">
      <div class="center aligned thirteen wide column">
        <div class="ui menu icon grey compact inverted">
          <icon-command :command="DebugBrowser" :class="{'active': IsDebuggingVm}" icon="bars" nome="Inspect"></icon-command>
          <icon-command v-if="VmDebug" :command="DebugWindow" icon="bug" nome="Vm debugger"></icon-command>
          <icon-command :command="ShowInfo" direction="right" icon="info circle" nome="About"></icon-command>
        </div>
      </div>

      <div class="left floated right aligned three wide column">
        <div class="description">
          <span>{{ComponentName}}</span>
           <div class="ui circular label white">
          <img class="logo" src="./assets/logo.png">
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import iconCommand from './components/icon-command'

  const props = {
    viewModel: Object,
  };

  export default {
    components: {
      iconCommand
    },
    name: 'app',
    props,
    data() {
      return this.viewModel
    }
  }

</script>

<style>
  @import '~dist/semantic.css';

  .description{
    margin-right: 10px;
  }
</style>