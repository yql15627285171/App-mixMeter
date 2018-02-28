export default {
	/* 下面的设置都是相对路径*/

	/**
	测试使用
	*/
	test:"/HelloWorld",

	/**
	*采用snsapi_userinfo的授权方式
	*需要用户手动授权
	*/
	scope_url1:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx79b555e9247591b2&redirect_uri=https%3a%2f%2fwww.stsidea.com%2f%23%2fchoosePage&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect',

	/**
	*采用snsapi_base的授权方式
	*默认授权
	*/
	scope_url2:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx79b555e9247591b2&redirect_uri=https%3a%2f%2fwww.stsidea.com&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
}
