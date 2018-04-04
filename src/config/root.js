/**
*这是一个将需要导入到main.js的全局引用文件
*/
import Vue from 'vue'

/**
*全局变量，指令，方法
*/
import index from './global'
Vue.use(index)

/**
*重置css样式文件的导入
*/
import './style/reset.css'

/**
*axios的配置
*/
import http from '../axios/http'
Vue.prototype.http = http

import api from '../axios/api'
Vue.prototype.api = api

/**
*导入AES加密文件
*/
import Encrypt from './AES/myAES'
Vue.use(Encrypt)

/**
*格式化时间
*/
import dataUtil from './AES/Date'
Vue.prototype.dataUtil = dataUtil
