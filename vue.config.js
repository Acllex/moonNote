module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#2c333c',
                    },
                    javascriptEnabled: true,
                    math: 'always',
                },
            },
        },
    },
};