const path = require('path'); //CommonJS Importando módulo path

module.exports = { //Exportando objeto 
    mode: 'production', //development or prodruction
    entry: './frontend/main.js', //Entrada
    output: { //Saída
        path: path.resolve(__dirname, 'public', 'assets', 'js'), //A pasta é configurada pelo próprio path, precisamos apenas criar as pastas
        filename: 'bundle.js' //Nome do arquivo criado
    },
    module: {
        rules: [{ //Regras do módulo
            exclude: /node_modules/, //Exclui a pasta do node, ou seja, não fica analisando a pasta
            test: /\.js$/, //Vai testar qual a extensão do arquivo
            use: { //Qual módulo irá usar
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env'] //Presets
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'source-map' //Mapea um erro
};
