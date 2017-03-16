<template>
  <a @click.stop.prevent="execute">
    {{text}}
    <i class="icon" :class="icon"></i>
  </a>
</template>

<script>
import comandMixin from 'neutronium-vue-command-mixin'

export default {
  mixins:[comandMixin],
  props:{
    text: String,
    icon: String
  }
}
</script>

<style>
</style>