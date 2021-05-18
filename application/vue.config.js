module.exports = {
    filenameHashing: false,
    publicPath: "/wp-content/themes/heyshots/application/dist/",
    chainWebpack: (config) => {
        config.plugins.delete("html");
        config.plugins.delete("preload");
        config.plugins.delete("prefetch");
    },
    devServer: {
        host: "localhost",
        hot: true,
        writeToDisk: true,
    },
    css: {
        extract: true,
    },
};
