export default {
	/* 下面的设置都是相对路径*/

   /**
   *基本路径
   */

   // 泰瑞捷测试
   // baseUrl:'http://api.smart.trjiot.com/webiot.asmx',

   // 申特
   baseUrl:'https://www.trjiot.com/webiot.asmx',

  

   /*测试接口
   *openid             微信openid
   **返回参数**           
   *Flg
   *RegionCode
   *headimgurl电话
   */
   LoadBympOpenidForTest:'/LoadBympOpenidForTest',

   // 泰瑞捷公众号
   // url:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx79b555e9247591b2&redirect_uri=http%3a%2f%2fmp.trj.trjiot.com%2f%23%2fchoosePage&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect',
   // 申特公众号
   url:'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2116ee6faa2b9cc0&redirect_uri=http%3a%2f%2fmp.smart.trj-china.com%2f%23%2fchoosePage&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect',

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
   *查询用户信息
   *UserId             用户名 
   *MeterKindId        表计类型1电表
   *time               时间格式与以前相同 不用加密           
   */
   QureyUserByUserId:'/QureyUserByUserId',




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
   *修改地址
   *MobilePhone        电话
   *UserId             用户名
   *UserName           姓名
   *CustomerAddress    地址
   *time               时间格式与以前相同 不用加密
   */
   UpdateUserAddress :'/UpdateUserAddress',

   /**
   *修改地址
   *MobilePhone        电话
   *UserId             用户名
   *UserName           姓名
   *CustomerAddress    地址
   *vCode              验证码
   *time               时间格式与以前相同 不用加密
   */
   UpdateUserMoblie :'/UpdateUserMoblie',




   /**
   *获取手机验证码
   *mobile             手机号
   *time               当前时间
   **返回参数**    
    *成功或失败及信息
   */
   VerificationCode:'/VerificationCode',

   /**
   *客户电量数据查询
   *HouseRegionCode      房间码
   *time        时间
   **返回参数**
      **status  成功或失败
      **data    数据
       *** EData  电能数据
        ****ELastDay 最近一天的用电情况
         *****FreezeDate 时标
         *****TotalPow 总量
         *****Power1 尖量
         *****Power2 峰量
         *****Power3 平量
         *****Power4 谷量
        ****EMonth 月电能（12月）
         *****FreezeDate 时标
         *****TotalPow 总量
        ****EDay 日电能（30天）
         *****FreezeDate 时标
         *****TotalPow 总量
   */
   QureyEFDataForUser:'/QureyEFDataForUser',

   /**
   *客户交易流水账查询
   *HouseRegionCode      房间码
   *time        时间
   **返回参数**
      **status  成功或失败
      **data    数据
       ***index    序号
       ***TransactionOrder    交易订单号
       ***TransactionType     交易类型
       ***TransactionAmount   交易金额
       ***TransactionMode     交易途径
       ***TransactionMethod   交易方法
       ***TransactionTime     交易时间
   */
   QueryMDForUser:'/QueryMDForUser',

   /**
   *根据用户ID获取房屋审核信息
   *UserId       用户ID  
   *time        时间
   **返回参数**           
   *Apply      返回“申请” 列表
   **FiveAndHouseName  名称
   **HouseRegionCode 六级码
   *Check      返回“审核” 列表
   **FiveAndHouseName  名称
   **HouseRegionCode 六级码
   */
   QueryUserHouseInfoByID:'/QueryUserHouseInfoByID',

   /**
   *解除用户房间信息
   *UserId       用户ID  
   *HouseRegionCode      房间码
   *time        时间
   **返回参数**           
   *返回“成功”“失败”
   */
   DeleteUserHouseInfo:'/DeleteUserHouseInfo'



}











