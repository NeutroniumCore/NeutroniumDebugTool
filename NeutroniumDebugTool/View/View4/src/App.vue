<template>
  <div class="ui card">
  <div class="image">
    <img src="./assets/logo.png">
  </div>
  <div class="content">
    <a class="header">Neutronium</a>
    <div class="meta">
      <span class="date">Copyright (c) 2017 David Desmaisons</span>
    </div>
    <div class="description labels">
      <badge text="Neutronium.Core" :info="CoreVersion"></badge>
      <badge text="Neutronium.WPF" :info="WPFVersion"></badge>
      <badge :text="WebBrowser" :info="WebBrowserVersion"></badge>
      <badge v-if="WebEnvironment" text="Platform" :info="WebEnvironment"></badge>
      <badge :text="JavascriptFramework" :info="JavascriptFrameworkVersion"></badge>
      <badge text="Browser" :info="BrowserBinding"></badge>
      <badge text="Binding" :info="MVVMBinding"></badge>
    </div>
  </div>
   <div class="extra content">
  <command-link class="right floated" :command="GoToGithub" text="See on Github" icon="github"></command-link>
  </div>
  
</div>
</template>

<script>

import commandLink from './component/commandlink'
import badge from './component/badge'

const props={
  viewModel: Object,
};

export default {
  components:{
    commandLink,
    badge
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
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.about-badge {
  width: 100%;
}

</style>
