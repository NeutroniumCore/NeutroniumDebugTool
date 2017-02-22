<template>
  <section class="main hero is-primary">
    <div class="level inside">
      <div class="level-item">
          <icon-command :command="DebugBrowser" :class="{'is-active': IsDebuggingVm}" icon="bars" nome="Inspect"></icon-command>
          <icon-command  v-if="VmDebug" :command="DebugWindow" icon="bug" nome="Vm debugger"></icon-command>
          <icon-command :command="ShowInfo" icon="info-circle" nome="About"></icon-command>
      </div>  
        <div class="level-right">
          <div class="tag is-medium">
            <span>Neutronium {{ComponentName}}</span>        
            <img class="logo" src="./assets/logo.png">
          </div>           
        </div>  
    </div>
  </section>
</template>

<script>
import iconCommand from './components/icon-command'
import 'font-awesome/css/font-awesome.css'
import 'bulma'

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

.main {
  height: 100px;
}

.inside {
  margin-top: 5px;
}
</style>
