export default {
	/* 下面的设置都是相对路径*/

   /**
   *基本路径
   */
   // baseUrl:'https://www.trjiot.com/webiot.asmx',

   // 泰瑞捷
   baseUrl:'http://api.smart.trjiot.com/webiot.asmx',

   /*测试接口
   *openid             微信openid
   **返回参数**           
   *Flg
   *
RegionCode
   *
headimgurl电话
   */
   LoadBympOpenidForTest:'/LoadBympOpenidForTest',

   url:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx79b555e9247591b2&redirect_uri=http%3a%2f%2fmp.smart.trj-china.com%2f%23%2fchoosePage&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect',

   /**
   *获取回调url
   *bBase       是否用base（静默方式），boolen 类型
   *time        时间
   **返回参数**           
   */
   MPRedirect_url:'/MPRedirect_url',


   /**
   *获取手机验证码
   *evalue   加密参数Json数据
   **mobile             手机号
   **time               时间格式与以前相同 不用加密
   */
   VerificationCode:'/VerificationCode',

   /**
   *注册
   *mobile             手机号
   *vCode              验证码
   *mpCode             微信code 获取微信openID
   *UserId             用户名
   *UserName           姓名
   *UserPwd            密码
   *time               时间格式与以前相同 不用加密
   */
   Register:'/Register',


   /**
   *微信登录 客户不存在需要注册，失败信息中的data：Register
   *mpCode             微信code值
   *time               时间格式与以前相同 不用加密
   */
   LoadBympCode:'/LoadBympCode',

   /**
   *用户查询当前电表状态及用户信息
   *UserId             用户名 
   *MeterKindId        表计类型1电表
   *time               时间格式与以前相同 不用加密           
   */
   QureyMeterCurrentStatusByUserId:'/QureyMeterCurrentStatusByUserId',

   /**
   *获取省市区社区
   *RegionCode         第一级列表时传0，其他级别传上级的regionCode
   *time               时间格式与以前相同 不用加密
   */
   GetRegionInfoByRegion:'/GetRegionInfoByRegion',

   /**
   *申请绑定房间信息
   *HouseRegionCode         房间编码
   *UserId             用户名
   *time               时间格式与以前相同 不用加密
   */
   ApplyForAccessHouseInfo:'/ApplyForAccessHouseInfo',

   /**
   *申请解除房间信息
   *HouseRegionCode         房间编码
   *UserId             用户名
   *time               时间格式与以前相同 不用加密
   */
   ApplyForRemoveHouseInfo:'/ApplyForRemoveHouseInfo',



   /**
   *获取个人信息： 名称、电话、地址
   *UserId             用户名
   *time               时间格式与以前相同 不用加密
   **返回参数**           
   *MobilePhone        电话
   *UserName           姓名
   *CustomerAddress    地址
   */
   QueryUserInfoByID:'/QueryUserInfoByID',

   /**
   *修改个人密码
   *UserPwdOld         原密码
   *UserPwd            密码
   *UserId             用户名
   *time               时间格式与以前相同 不用加密
   */
   UpdateUserPassWord:'/UpdateUserPassWord',

   /**
   *修改个人信息： 名称、电话、地址
   *MobilePhone        电话
   *UserId             用户名
   *UserName           姓名
   *CustomerAddress    地址
   *time               时间格式与以前相同 不用加密
   */
   UpdateUserInfo:'/UpdateUserInfo',


}











