<template>
  <div>
    <div class="ui menu icon grey compact inverted" v-for="command in commands">
      <icon-command :command="command.command" :class="{'active': command.active}" :icon="command.icon" :name="command.name">
      </icon-command>
    </div>
  </div>
</template>

<script>
import iconCommand from './icon-command'

export default {
  components: {
    iconCommand
  },
  props:{
    commands: {
      required: true,
      type: Array
    }
  }
}
</script>

<style>
</style>
