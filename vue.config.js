const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            // 需要引入的公共文件
            patterns: [path.resolve(__dirname, './src/render/less/index.less')]
        });
}
module.exports = {
    configureWebpack: {
        entry: './src/render/main.ts',
        resolve: {
            extensions: ['.js', '.vue', '.json', '.ts', '.less'],
            alias: {
                '@': resolve('src/render')
            }
        }
    },
    chainWebpack: (config) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach((type) => addStyleResource(config.module.rule('less').oneOf(type)));
    },
    pluginOptions: {
        electronBuilder: {
            outputDir: 'dist/electron',
            mainProcessFile: 'src/main/index.ts',
            mainProcessWatch: ['src/main']
        }
    }
};
