module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
  ? '/VWBuybackCalculator/'
  : '/',

  pwa: {
    name: 'VW Buyback Calculator'
  }
}