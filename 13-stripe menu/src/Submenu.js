import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from './context';

const Submenu = () => {
  const {sublinks, isSubmenuOpen, openedPage, location} = useGlobalContext();
  const containerRef = useRef(null);
  useEffect(()=>{
    containerRef.current.style.left = `${location + 75}px`;
  }, [isSubmenuOpen])
  return (
    <aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={containerRef}>
        {sublinks.filter(link => link.page === openedPage).map((item,index) => {
          return(
            <section key={index}>
              <h4>{item.page}</h4>
              <div className={`submenu-center col-${item.links.length}`}>
                {item.links.map((itemLink, itemLinkIndex) => {
                  return(
                    <a key={itemLinkIndex} href={itemLink.url}>{itemLink.icon} {itemLink.label}</a>
                  );
                })}
              </div>
            </section>
          );
        })}
    </aside>
  );
}

export default Submenu
