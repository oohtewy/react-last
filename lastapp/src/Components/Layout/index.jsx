import layout from './style.css'
function Layout(props) {
    return ( 
        <div>
            <nav style={layout}>
                <div className='left'>
                    <a href="https://www.mail.com/"><img src="wat.png"/></a>
                    <a href="https://github.com/"><img src="wat.png"/></a>
                    <a href="https://ru.linkedin.com/"><img src="wat.png"/></a>
                    <a href="https://stackoverflow.com/"><img src="wat.png"/></a>
                </div>
                <div className='right'>
                    <a href="#first">Projects</a>
                    <a href="#second">Contact me</a>
                </div>
            </nav>
        </div>
     );
}

export default Layout;