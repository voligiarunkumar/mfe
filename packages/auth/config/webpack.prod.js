const{merge}=require('webpack-merge');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const packgeJson=require('../package.json');
const commonConfig=require('./webpack.common');
const productionConfig={
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath:'/auth/latest/',
        
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'auth',
            filename:'remoteEntry.js',
            exposes:{
                './AuthApp':'./src/bootstrap',
            },
            shared:packgeJson.dependencies,
        })
    ]
}
module.exports=merge(commonConfig,productionConfig);