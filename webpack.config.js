const path = require('path');//引入node中的path模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const jquery = require('jquery');


const glob = require('glob') 

const HTMLReg = /([^<>/\\\|:""\*\?]+)\.\w+$/ //匹配文件名
const JSReg = /([^<>/\\\|:""\*\?]+)\.\w+$/

const entries = glob.sync('src/!(assets)/*.js').reduce((prev, next) => { //对多入口进行自动化配置
    let name = next.match(JSReg)[1] //正则匹配
    prev[name] = './' + next 
    return prev 
}, {})

const html = glob.sync('src/!(assets)/*.html').map(path => { //对多文件进行自动化配置
    let name = path.match(HTMLReg)[1]; // 从路径中提取出文件名
    return new HtmlWebpackPlugin({ 
        template: path, 
        filename: name + '.html', 
        chunks: ['commons',name] 
    })
})

module.exports = {
    entry: entries,//入口 所有glob命中的js文件
    output: {
        path: __dirname + '/dist',//出口 所有的其他文件会生成在里面
        filename: 'js/[name].js',  //生成的index.js
        publicPath: './'//所有生成链接前加路径
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        //new CleanWebpackPlugin(['./dist']),
        
        new MiniCssExtractPlugin({//设置生成的css路径
            filename: 'css/[name].css',
            chunkFilename: "css/[id].css"
        }),
        new webpack.ProvidePlugin({//jquery全局设定
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        // new CopyWebpackPlugin([
        //     { from: 'static', to: 'static'}
        // ])

    ].concat(html),
    module: {
        rules: [
            {//webpack4版本
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: __dirname + 'node_modules',
                include: __dirname + 'src',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            {
                test:/\.(gif|png|jpg|woff|svg|ttf|eot)$/,//图片的处理
                use:[{
                    loader:'url-loader',
                    options: {
                        limit:4000,
                        outputPath: './images',// 指定打包后的图片位置
                        name:'[name].[hash].[ext]',
                        //publicPath:'./',
                    }
                }]
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './fonts'
                    }
                }]
            },
            
        ]
    },
    optimization: {//js代码分离
        splitChunks: {
            chunks: 'all',
            name: 'commons',
            filename: 'js/[name].[hash].js'
        }
    },
    devServer: {//服务器带热更新
        host: '127.0.0.1',
        publicPath: '/',
        contentBase: './',
        hot: false
    },
    resolve: {//因为默认指向common 需要整个重新定向
        alias: {
            'vue': 'vue/dist/vue.js',
        }
    },
};
