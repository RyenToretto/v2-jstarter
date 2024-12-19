import qs from 'qs'
export function generalLink({ path, query = {} }) {
  const localPath = location.pathname
  let url = `${localPath}#${path}`
  if (query) {
    url += '?' + qs.stringify(query, { arrayFormat: 'repeat' })
  }
  return url
}
