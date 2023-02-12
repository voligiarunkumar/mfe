const {merge}=require('webpack-merge');

const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const pacakgejson=require('../package.json');
const commonConfig=require('./webpack.common');
const devConfig={
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js'  
            },
            shared:pacakgejson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
};
module.exports=merge(commonConfig,devConfig);