import {init} from './utils/router.js'
import MainPage from './components/MainPage.js'

export default function App($target) {
    this.route = () => {
        const {pathname} = location
        console.log(pathname)
        console.log($target)

        $target.innerHTML = ''

        if(pathname === '/') {
            new MainPage({$target}).render()
        }
    }
    init(this.route)

    this.route()
    
}