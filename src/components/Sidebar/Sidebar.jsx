import './Sidebar.scss'

export default function Sidebar() {
    return (
        <section className='sidebar'>
            <div className='sidebar__container'>
                <ul className='sidebar__list'>
                    <a className='sidebar__list-item' href="http://shopify.com"><li >Home</li></a>
                    <a className='sidebar__list-item' href="http://shopify.com/orders"><li >Orders</li></a>
                    <a className='sidebar__list-item' href="http://shopify.com/products"><li >Products</li></a>
                    <a className='sidebar__list-item' href="htp://shopify.com/customers"><li >Customers</li></a>
                    <a className='sidebar__list-item' href="http://shopify.com/analytics"><li >Analytics</li></a>
                    <a className='sidebar__list-item' href="http://shopify.com/marketing"><li >Marketing</li></a>
                    <a className='sidebar__list-item' href="http://shopify.com/discounts"><li >Discounts</li></a>
                    <a className='sidebar__list-item' href="http://shopify.com/apps"><li >Apps</li></a>
                    <li className='sidebar__list-item'>Mentorship</li>
                </ul>
            </div>
        </section>
    )
}