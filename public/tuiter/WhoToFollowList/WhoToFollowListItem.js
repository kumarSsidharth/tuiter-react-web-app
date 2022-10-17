const WhoToFollowListItem = (who) => {
  return(`
  <a>
    <img class = "wd-dimension-30px"
         src = ${who.avatarIcon}>
    ${who.userName}<br/>
    ${who.handle}
    <div class="d-grid mt-2">
         <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Follow</a>
            <br/>
            <br/>
       </div>
    </a>
  `)
}

export default WhoToFollowListItem;