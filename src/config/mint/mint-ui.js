/**
*在此文件，按需引入mint-ui的相关组件
*/
import Vue from 'vue'

import { 
	Button,
	Tabbar,
	TabItem,
	TabContainer,
	TabContainerItem,
} from 'mint-ui'

// button引入
Vue.component(Button.name, Button)
// Tabbar引入
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
//TabContainer 
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
