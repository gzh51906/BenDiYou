// 引入path模块
const path = require("path");

// 引入插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

// webpack配置文件
module.exports = {
    // 入口，webpack分析项目依赖的起点
    entry: "./src/index.js",

    // 测试服务器，只在开发环境有效
    devServer: {
        // 服务器根目录
        contentBase: "./src",
        open: true
    },

    resolve: {
        // 设置目录别名
        alias: {
            "@": path.resolve(__dirname, "./src/pages"),
            "$": path.resolve(__dirname, "./src")
        },
        extensions: [".js", ".jsx"]
    },

    // 加载器
    module: {
        rules: [
            // 配置文件编译规则，每一种文件必须配置一个loader
            {
                test: /\.jsx?$/,

                // include/exclude 包含/排除
                include: path.resolve(__dirname, "./src"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins: [
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css"
                            }],
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },

            // css加载器
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 指定模板文件
            template: "./src/template.html"
        })
    ]
}