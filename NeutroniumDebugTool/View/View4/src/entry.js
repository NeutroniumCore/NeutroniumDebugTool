import Vue from 'vue'
import App from './App.vue'
import vueHelper from 'vueHelper'

function buildVueOption(vm) {
    return {
        render(h) {
            return h(App, {
                props: {
                    viewModel: this.$data.ViewModel
                }
            });
        }
    };
}

vueHelper.setOption(buildVueOption)