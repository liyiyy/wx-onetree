const CONF = {
  // port: '5757',
    port: '1122',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx3853e08f53316a99',
    appSecret: 'a6985a1cfd2c0e3e53c1a43852b9b6a8',


    mongoPost:'127.0.0.1',
    mongoPort:'27017',
    mongoUser:'weapp',
    mongoPwd:'weapp-dev',
    mongodb:'onetree'

    // db: 'mongodb://127.0.0.1/onetree',
    // 微信小程序 App Secret

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    // mysql: {
    //     host: 'localhost',
    //     port: 1122,
    //     user: 'root',
    //     db: 'cAuth',
    //     pass: 'wx3853e08f53316a99',
    //     char: 'utf8mb4'
    // },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
