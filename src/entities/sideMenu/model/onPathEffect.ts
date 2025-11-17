export const onPathEffect = (path: string, name: string) => {
  if (path === '/' && name === '/') return true
  else if (name !== '/' && path.includes(name)) return true
  else return false
}
