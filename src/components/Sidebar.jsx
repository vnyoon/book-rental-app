import React, { memo } from 'react'
import { NavLink } from "react-router-dom";

import { 
  FaFire, 
  FaFolderPlus, 
  FaCalendarAlt, 
  FaRegHeart,
  FaRegClock, 
} from "react-icons/fa";

const Sidebar = memo(() => {
  return (
    <aside className="bg-orange-500">
      <ul className="space-y-2">
        <li>
          <NavLink
            className={({ isActive }) => `flex items-center space-x-2 px-5 py-3.5 rounded-lg ${isActive && 'bg-primary text-white'}`}
            to="/"
          >
            <FaFire />

            <span>热门榜</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => `flex items-center space-x-2 px-5 py-3.5 rounded-lg ${isActive && 'bg-primary text-white'}`}
            to="/"
          >
            <FaFolderPlus />

            <span>新品发布</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => `flex items-center space-x-2 px-5 py-3.5 rounded-lg ${isActive && 'bg-primary text-white'}`}
            to="/"
          >
            <FaCalendarAlt />

            <span>即将推出</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => `flex items-center space-x-2 px-5 py-3.5 rounded-lg ${isActive && 'bg-primary text-white'}`}
            to="/"
          >
            <FaRegHeart />

            <span>收藏夹</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) => `flex items-center space-x-2 px-5 py-3.5 rounded-lg ${isActive && 'bg-primary text-white'}`}
            to="/"
          >
            <FaRegClock />

            <span>稍后观看</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  )
})

export default Sidebar