<template>
  <div class="ui inverted button" @click="execute">
    <i :class="[icon, active? 'red' : '']" class="icon" ></i>
  </div>
</template>

<script>
import comandMixin from 'neutronium-vue-command-mixin'

export default {
  mixins:[comandMixin],
  props:{
    name: String,
    icon: String,
    active: Boolean
  }
}
</script>

<style>
</style>