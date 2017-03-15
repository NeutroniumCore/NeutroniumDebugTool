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
      Kristy is an art director living in New York.
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      22 Friends
    </a>
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
/*
img {
  height: 300px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
</style>
