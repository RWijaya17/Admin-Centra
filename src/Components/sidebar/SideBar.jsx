import React from 'react'
import './SideBar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AdjustIcon from '@mui/icons-material/Adjust';


function SideBar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Moringa</span>
        </div>
        <div className="center">
            <ul>
                <li>
                    < DashboardOutlinedIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                <li>
                    < AdjustIcon className='icon' />
                    <span>Centra</span>
                </li>
                
                <li>
                    <PersonOutlineOutlinedIcon className='icon'/>
                    <span>Shipping</span>
                </li>

                <li>
                    <PersonOutlineOutlinedIcon className='icon'/>
                    <span>Storage</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar
