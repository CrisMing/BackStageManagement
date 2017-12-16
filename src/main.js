import Vue from 'vue';

// 导入根组件
import AppComponent from './component/App.vue';

// 把根组件渲染到指定的视图当中
new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(AppComponent);
    },
    // render: c => c(AppComponent)
});
