// Any function that required, even before the web is fully loaded you can declare it here
// Every funtion that you declare here, will be available across all page, component, template, etc

import 'remixicon/fonts/remixicon.css'

import { render } from "./utility/render"
window.render = render // with window, it will be available across all i mention above

import { loopT } from "./utility/loopT"
window.loopT = loopT
