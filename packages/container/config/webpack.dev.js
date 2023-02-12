const {merge}=require('webpack-merge');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
//making sure that we have to use only webpack config  not webpack serve in the webpack.prod.js
const pacakgejson=require('../package.json');
const commonConfig=require('./webpack.common');
const devConfig={
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index: 'index.html'
        },
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js'  
            },
            shared:pacakgejson.dependencies,
        }),
       
    ],
};
module.exports=merge(commonConfig,devConfig);