const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.export = {
    webpack: {
        alias: {
            '@': resolve('src'),
            'components': resolve('src/components')
        }
    }
}