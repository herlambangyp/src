// loopT used to fill any template that you made
let calling = 0
export function loopT(templateId, dataList = [], targetContainerId) {
  // dataList supposed to be array
  if (calling === 5) {
    console.error(`loopT maximum call exceded`)
    calling = 0
    return
  }
  const template = document.getElementById(templateId),
    container = document.getElementById(targetContainerId)

  if (!template) {
    console.log(templateId, ` Not found, Retrying...`)
    setTimeout(o=> {
      loopT(templateId, dataList, targetContainerId)
      calling++
    }, 100)
    return
  }

  calling = 0
  if (!container) {
    if (!container) console.error('Target Container = ', targetContainerId, " Not Found")
    return
  }

  const rawHtml = template.innerHTML,
    renderedHtml = dataList.map(item => {
      return rawHtml.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => { return item[key] !== undefined ? item[key] : '' })
    }).join('')

  container.innerHTML = renderedHtml;
}