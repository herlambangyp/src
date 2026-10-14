export async function render(targetId, filePath) {
    let response, html, elem = document.getElementById(targetId)
    try {
        response = await fetch(filePath)
        html = await response.text()
        elem.innerHTML = html
        // console.log('path: ', filePath)
        
        const scripts = elem.querySelectorAll('script')
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script')
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value))
            newScript.appendChild(document.createTextNode(oldScript.innerHTML))
            oldScript.parentNode.replaceChild(newScript, oldScript)
        })
    } catch(err) {
        if (elem) elem.innerHTML = err
    }      
}