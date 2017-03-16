<template>
  <div class="ui card">
  <a class="header">About</a>
  <div class="image">
    <img src="./assets/logo.png">
  </div>
  <div class="content">
    <a class="header">Neutronium</a>
    <div class="meta">
      <span class="date">Copyright 2017</span>
    </div>
    <div class="description">
     <p>Neutronium.Core {{CoreVersion}}</p>
     <p>{{WebBrowser}}</p>
     <p>{{BrowserBinding}}</p>
     <p>{{MVVMBinding}}</p>
     <p>{{JavascriptFramework}}</p>
    </div>
  </div>
</div>
</template>

<script>
const props={
  viewModel: Object,
};

export default {
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
</style>
