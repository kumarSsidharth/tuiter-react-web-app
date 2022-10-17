import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="col-8 bg-dark text-white">
                <div class = "wd-bg-color-canvas wd-padding-15px wd-border-thin
            wd-border-solid wd-border-gray">
                  <div class = "wd-padding-left">
                    <input class ="wd-float-left wd-rounded-corners-all wd-border-thin wd-border-solid
               wd-border-blue wd-padding-5px wd-fg-color-white wd-bg-color-dark-gray wd-padding-left"
                           placeholder = "Search Tuiter">
                    <a href="explore-settings.html">
                    </a>
                  </div>

                  <br/>
                  <ul class="nav nav-tabs">
                    <li class="nav-item">
                      <a class="nav-link active" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">News </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Entertainment </a>
                    </li>
                  </ul>
                </div>

                <div class="card" style="width: 30rem;">
                  <img src="../../images/starship.jpg"
                       class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="wd-fg-color-normal-text card-title">New Bridge just dropped</h5>
                  </div>
                </div>

           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
