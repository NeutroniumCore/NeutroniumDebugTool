<template>
      <div class="ui button inverted labeled icon" @click="execute">
        <i :class="icon" class="icon" ></i>
        {{nome}}
    </div>
</template>

<script>
import comandMixin from 'neutronium-vue-command-mixin'

export default {
  mixins:[comandMixin],
  props:{
    nome: String,
    icon: String,
  }
}
</script>

<style>
</style>
