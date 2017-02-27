<template>
  <div class="ui grey inverted vertical footer segment main">
    <div class="ui grid inverted">
      <div class="center aligned two wide column">
      </div>

      <div class="center aligned nine wide column">
        <button-combo class="ui container" :commands="commands">
        </button-combo> 
      </div>

      <div class="middle aligned left floated right aligned five wide column">
        <div class="description-logo">
          <div class="ui label black right aligned">
            Neutronium.WPF
            <div class="detail">{{NeutroniumWPFVersion}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import buttonCombo from './components/button-combo'

  const props = {
    viewModel: Object,
  };

  export default {
    components: {
      buttonCombo
    },
    name: 'app',
    props,
    data() {
      return this.viewModel
    },
    computed:{
      commands(){
        var res =[{
          command: this.DebugBrowser,
          icon: 'bars',
          name: 'Inspect',
          active: false
        }];
        if (this.VmDebug){
          res.push({
            command: this.DebugWindow,
            icon: 'bug',
            name: 'Debug Vm',
            active: this.IsDebuggingVm
          });
        };
        res.push({
          command: this.SaveVm,
          icon: 'download',
          name: 'Save Vm',
          active: false
        },{
          command: this.ShowInfo,
          icon: 'info circle',
          name: 'About',
          active: false
        });
        return res;
      }
    }
  }

</script>

<style>
  @import '~dist/semantic.css';
  .description-logo {
    margin-right: 10px;
  }
</style>