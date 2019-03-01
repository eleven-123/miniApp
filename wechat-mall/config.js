/**
 * 小程序配置文件
 */

// 子域名
var subDomain = 'eleven';
// api的前缀
var API_URL ='https://api.it120.cc/'+subDomain;

var siteConfig = {
    API_URL:API_URL
};

/**
 * api 路由
 */
var apiRoutes = {
    //获取首页轮播图
    getBanner:API_URL+'/banner/list',
    //获取商品分类
    getCategory:API_URL+'/shop/goods/category/all',
    //获取商品列表
    getGoodsList:API_URL+'/shop/goods/list',
    //获取商品详情
    getGoodsDetail:API_URL+'/shop/goods/detail'
}
module.exports = {
    siteConfig:siteConfig,
    apiRoutes:apiRoutes
};