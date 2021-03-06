import Vue from 'vue'
import RenSvgIcon from '@/components/ren-icon-svg'// svg组件

// register globally
Vue.component('ren-icon-svg', RenSvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./icons', false, /\.svg$/)
const iconMap = requireAll(req)

Vue.prototype.$IconSvg = iconMap.map(e => e.default.id.slice(3))
