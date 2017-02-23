<template>
  <div>
      <button class="ui button inverted" @click="execute">
        <i class="icon" :class="icon" ></i>
        {{nome}}
    </button>
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
