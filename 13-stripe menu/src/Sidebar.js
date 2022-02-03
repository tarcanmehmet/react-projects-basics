import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context';

const Sidebar = () => {
  const {sublinks, closeSidebar, isSidebarOpen} = useGlobalContext();
  return (
    <div className={`sidebar-wrapper ${isSidebarOpen && 'show'}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
        <div className='sidebar-links'>
          {sublinks.map((link,index) => {
            return(
              <article key={index}>
                <h4>{link.page}</h4>
                <div className='sidebar-sublinks'>
                  {link.links.map((item,itemIndex) =>{
                    return(
                      <a key={itemIndex} href={item.url}>{item.icon} {item.label}</a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar
