const NavigationSidebar = () => {
   return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a href="../home.html" class="list-group-item list-group-item-action">
       <i class="fa-sharp fa-solid fa-house"></i>
       Home</a>
     <a href="index.html" class="list-group-item list-group-item-action active">
       <i class="fa-solid fa-hashtag fa-2x"></i>
       Explore</a>
     <a href="../notifications.html" class="list-group-item list-group-item-action">
       <i class="fa-solid fa-bell fa-2x"></i>
       Notifications</a>
     <a href="../messages.html" class="list-group-item list-group-item-action">
       <i class="fa-solid fa-envelope fa-2x"></i>
       Messages</a>
     <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
       <i class="fa-solid fa-bookmark fa-2x"></i>
       Bookmarks</a>
     <a href="../lists.html" class="list-group-item list-group-item-action">
       <i class="fa-solid fa-list fa-2x"></i>
       Lists</a>
     <a href="../profile.html" class="list-group-item list-group-item-action">
       <i class="fa-solid fa-user fa-2x"></i>
       Profile</a>
     <a href="../more.html" class="list-group-item list-group-item-action ">
       <i class="fa-sharp fa-solid fa-circle-ellipsis fa-2x"></i>
       More</a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
 }
export default NavigationSidebar;