export const mapNodesToArray = (name, data) => {
  return data[name].edges.map(item => {
    return item.node
  })
}
