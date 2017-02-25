<template>
  <div class="ui button inverted" @click="execute">
    <i :class="icon" class="icon" ></i>
  </div>
</template>

<script>
import comandMixin from 'neutronium-vue-command-mixin'

export default {
  mixins:[comandMixin],
  props:{
    name: String,
    icon: String,
  }
}
</script>

<style>
</style>
