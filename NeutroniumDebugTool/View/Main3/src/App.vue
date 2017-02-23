<template>
  <div class="ui grey inverted vertical footer segment main">
    <div class="ui grid inverted">
      <div class="center aligned twelve wide column">
        <div class="ui menu icon grey compact labeled inverted">
          <icon-command :command="DebugBrowser" class="item" :class="{'is-active': IsDebuggingVm}" icon="bars" nome="Inspect"></icon-command>
          <icon-command v-if="VmDebug" :command="DebugWindow" class="item" icon="bug" nome="Vm debugger"></icon-command>
          <icon-command :command="ShowInfo" direction="right" class="item" icon="info circle" nome="About"></icon-command>
        </div>
      </div>

      <div class="right floated left aligned four wide column">
        <div class="ui label black">
          <span>Neutronium: {{ComponentName}}</span>
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
</style>