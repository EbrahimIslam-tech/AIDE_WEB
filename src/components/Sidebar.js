import React, { useState } from 'react'
import menu1 from '../photos/menubar.png'
import menu2 from '../photos/menubar2.png'
import menu3 from '../photos/menubar3.png'
import menu4 from '../photos/menubar4.png'
import menu5 from '../photos/menubar5.png'
import menu6 from '../photos/menubar6.png'
import menu7 from '../photos/menubar7.png'
import menu8 from '../photos/menubar8.png'
import menu9 from '../photos/menubar9.png'
import './Sidebar.css'
import leftIcon from '../photos/Chevron.png'

function Sidebar() {

    const [sideBarExpand, setSidebarExpand] = useState(false)

    const handleSidebarExpand = () => {
        if (sideBarExpand) {
            setSidebarExpand(false)
        } else {
            setSidebarExpand(true)
        }
    }

    return (
        <div className="menuBar_container">
            <div className="sidebar">

                <div className="menuBar_item" onClick={handleSidebarExpand}>
                    <img src={menu1} alt="" />
                </div>

                <div className="menuBar_item" onClick={handleSidebarExpand}>
                    <img src={menu2} alt="" />
                </div>

                <div className="menuBar_item" onClick={handleSidebarExpand}>
                    <img src={menu3} alt="" />
                </div>

                <div className="menuBar_item" onClick={handleSidebarExpand}>
                    <img src={menu4} alt="" />
                </div>

                <div className="menuBar_item" onClick={handleSidebarExpand}>
                    <img src={menu5} alt="" />
                </div>

                <div className="menuBar_item" onClick={handleSidebarExpand}>
                    <img src={menu6} alt="" />
                </div>

                <div className="menuBar_item" onClick={handleSidebarExpand}>
                    <img src={menu7} alt="" />
                </div>

                <div className="menuBar_item" onClick={handleSidebarExpand}>
                    <img src={menu8} alt="" />
                </div>

                <div className="menuBar_item" onClick={handleSidebarExpand}>
                    <img src={menu9} alt="" />
                </div>





            </div>

            <div className={sideBarExpand ? "animate__animated animate__slideInLeft animate__faster sidebar_details_container " : "sidebar_details_container containter_hide"}>
                <div className="sidebar_details_header">
                    <div className="sidebar_header_title">
                        <img onClick={() => handleSidebarExpand()} width={9.26} height={16} src={leftIcon} alt="" />
                        <p className='title_header'> Category</p>
                    </div>

                </div>


                <div class="sidebar_details_body">

                    <div className="sidebar_item_selector">
                        <a href="#" className="mysidebar_button selected_button">
                            Category
                        </a>
                        <a href="#" className="mysidebar_button">
                            Brand
                        </a>
                        <a href="#" className="mysidebar_button">
                            Company
                        </a>
                    </div>
                    <div className="sidebar_searchbar">
                        <input className='sidebar_input_search' type="text" placeholder='Search' />
                    </div>
                    <div className="sidebar_details_content_wrapper">
                        <ul className="sidebar_list_container">
                            <li>Food and General Groceries</li>
                            <li>Health Item</li>
                            <li>Home Accessories</li>
                            <li>Beauty Cosmetics</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                            <li>Element 1</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Sidebar
