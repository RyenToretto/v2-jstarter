export default {
  userInfo: {},
  permissions: [],
  pkg: localStorage.getItem('pkg'),
  pageSize: Number(localStorage.getItem('pageSize')) || 10,
  oversea: sessionStorage.getItem('oversea') === 'true' || false,
  pathHideList: [],
  allRoutes: []
}
