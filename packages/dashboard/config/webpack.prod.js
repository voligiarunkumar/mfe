const{merge}=require('webpack-merge');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const packgeJson=require('../package.json');
const commonConfig=require('./webpack.common');
const productionConfig={
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath:'/Dashboard/latest/',
        
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'dashboard',
            filename:'remoteEntry.js',
            exposes:{
                './DashboardApp':'./src/bootstrap',
            },
            shared:packgeJson.dependencies,
        })
    ]
}
module.exports=merge(commonConfig,productionConfig);