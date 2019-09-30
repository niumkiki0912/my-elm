import Vue from 'vue';
import store from './index'

export default {
    setUserInfo(state, data) {
        state.user = data
    }
}