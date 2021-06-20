import './PageBottomNavigation.css';

function PageBottomNavigation() {
    let scrollTo = (id) => {
        var elmnt = document.getElementById(id);
		elmnt.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
    return(
        <div className="navigation-wrapper">
            <a href="/">
                <div className="back">&#8592; back to other installation guides</div>
            </a>
            <a onClick={() => scrollTo('top')}>
                <div className="top">back to top &#8593;</div>
            </a>
        </div>
    )
}

export default PageBottomNavigation