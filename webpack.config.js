const { resolve } = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        // environment: {
        //     //老版本的IE浏览器兼容箭头函数
        //     arrowFuntion: false
        // }
    },
    module: {
        rules: [
            //配置ts
            {
                test: /\.ts$/,
                use: [
                    {
                        //配置babel 加载
                        loader: "babel-loader",
                        //设置babel兼容的浏览器
                        options: {
                            presets: [
                                [
                                    //环境插件，自己去根据环境使用babel
                                    "@babel/preset-env",
                                    //配置信息,要兼容的目标浏览器
                                    {
                                        targets: {
                                            chrome: "58"
                                        },
                                        //指定core版本
                                        "corejs": "3",
                                        //按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ],
                        }
                    },
                    'ts-loader',
                ],
                exclude: /node_module/,
            },
            //设置less文件处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    //引入postcss,兼容老版本css
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env", {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",



                ]
            },
        ]
    },
    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),//每次打包都清除上一次打包的文件
        new HTMLWebpackPlugin(
            {
                title: "Zoe Lover",
                filename: "index.html",
                //设置模板
                template: "./src/index.html"
            }
        ),
    ],
    //设置引用的模块，可以引入文件import
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    mode: 'production',
    // devServer: {
    //     port: '8081',
    //     open: true
    // }
}