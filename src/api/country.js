/* 国家数据，用于国家下拉列表 */
// 按产品成本倒排
export const getCountryList = (params, api) => {
  return window.axios.get(api || '/app/country', {
    params
  })
}
//
export const requestAllCountry = () => {
  return window.axios.get('/country/revenue/code')
}
