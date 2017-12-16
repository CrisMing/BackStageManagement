const path=require('path');
const htmlWP=require('html-webpack-plugin');
module.exports={
    entry:path.resolve(__dirname,'./src/main.js'),
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWP({
            //自动把打包js注入到html
            template:path.resolve(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        //配置非js模块的处理规则
        rules:[
            //css模块
            {
                test:/\.css$/,
                use:['style-loader','css-loader',]
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            //静态资源引入模块
            {
                test:/\.(gif|png|jpg|svg|mp3)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{limit:10240}
                    }
                ]
            },
            //js模块
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            // vue模块
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]

    },
    
}