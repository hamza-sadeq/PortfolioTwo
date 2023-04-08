import React, { useState } from 'react'
import SidebarItems from './SidebarItems';

const Sidebar = () => {

    const [isOpen, setIsopen] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    const toggleSidebar = () => {
        setIsopen(!isOpen);
        setIsClosed(!isClosed);
    };

    return (
        <div>
            <div id='menu' onClick={toggleSidebar} style={{
                zIndex: '999',
            }}>
                <span style={{
                    top: isClosed ? '50%' : '75%',
                    transform: isClosed ? 'rotate(-45deg)' : 'rotate(0deg)',
                    backgroundColor: isOpen ? '#fff' : '#000'
                }}></span>
                <span style={{
                    display: isClosed ? 'none' : 'block',
                    backgroundColor: isOpen ? '#fff' : '#000'
                }}></span>
                <span style={{
                    bottom: isClosed ? '45%' : '75%',
                    transform: isClosed ? 'rotate(45deg)' : 'rotate(0deg)',
                    backgroundColor: isOpen ? '#fff' : '#000'
                }}></span>
            </div>
            <div style={{
                backgroundColor: '#000000d2',
                minHeight: '100vh',
                position: 'fixed',
                top: '0',
                left: '0',
                minWidth: '100%',
                transition: 'all .4s ease',
                opacity: isOpen ? '1' : '-1',
                display: isOpen ? 'block' : 'none'
            }}>
                <div style={{
                    zIndex: '5',
                }}>
                    <SidebarItems /> 
                </div>
            </div>
        </div>
    )
}

export default Sidebar