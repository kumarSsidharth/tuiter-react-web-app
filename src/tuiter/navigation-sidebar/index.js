import React from "react";

const NavigationSidebar = ({
                              active = 'explore'
                            }) => {

 return (
  <div className="list-group">
         <a href="/tuiter" className="list-group-item">Tuiter</a>
         <a href="/home" className={`list-group-item
                       ${active === 'home'?'active':''}`}>
                       Home</a>
         <a href="/explore" className={`list-group-item
                       ${active === 'explore'?'active':''}`}>
                       Explore</a>
         <a href="/notification" className={`list-group-item
                       ${active === 'notifications'?'active':''}`}>
                Notifications</a>
         <a href="/messages" className={`list-group-item
                       ${active === 'messages'?'active':''}`}>
                Messages</a>
         <a href="/bookmarks" className={`list-group-item
                       ${active === 'bookmarks'?'active':''}`}>
                Bookmarks</a>
         <a href="/lists" className={`list-group-item
                       ${active === 'lists'?'active':''}`}>
                Lists</a>
         <a href="/profile" className={`list-group-item
                       ${active === 'profile'?'active':''}`}>
                Profile</a>
         <a href="/more" className={`list-group-item
                       ${active === 'more'?'active':''}`}>
                More</a>
            </div>
          );
};
export default NavigationSidebar;
