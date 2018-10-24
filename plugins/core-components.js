import Vue from 'vue'

/**
 * Define all global components as plugins, thus no import is needed
 * individually on pages
 */

import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'
import PostList from '@/components/Posts/PostList'

Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostList', PostList)
