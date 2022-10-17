const PostSummaryItem = (post) => {
  return(`
  <a>
  <div class = "wd-fg-color-white wd-padding-10px wd-fsize-13px">${post.userName}</div>

  <div class = "wd-fg-color-white wd-pos-relative-nudge-right-15px">${post.title}
          <img class = "wd-pos-relative-nudge-right-12px wd-dimension-100px wd-rounded-corners-all-slight "
           src=${post.image}>
        </div>

  <div class = "wd-fg-color-normal-text wd-padding-10px wd-fsize-13px">${post.time}</div>
  </a>
  `)
}



export default PostSummaryItem;