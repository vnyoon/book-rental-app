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
  const sidebarList = [
    { 
      id: crypto.randomUUID(), 
      name: '热门榜', 
      path: '/hot-books', 
      icon: <FaFire />
    },
    { 
      id: crypto.randomUUID(), 
      name: '新品发布', 
      path: '/new-releases', 
      icon: <FaFolderPlus /> 
    },
    { 
      id: crypto.randomUUID(), 
      name: '即将推出', 
      path: '/coming-soon', 
      icon: <FaCalendarAlt /> 
    },
    { 
      id: crypto.randomUUID(), 
      name: '收藏夹', 
      path: '/favorites', 
      icon: <FaRegHeart /> 
    },
    { 
      id: crypto.randomUUID(), 
      name: '稍后观看', 
      path: '/watch-later', 
      icon: <FaRegClock /> 
    }
  ];

  return (
    <aside>
      <ul className="space-y-2">
        {
          sidebarList.map(side => (
            <li key={side.id}>
              <NavLink
                className={({ isActive }) => `flex items-center space-x-2 px-5 py-3.5 rounded-lg ${isActive && 'bg-primary text-white'}`}
                 to={side.path}
              >
                { side.icon }

                <span>{ side.name }</span>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </aside>
  )
})

export default Sidebar