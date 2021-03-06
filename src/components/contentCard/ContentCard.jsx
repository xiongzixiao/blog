import React, { Component } from 'react'
// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import './contentCard.css'

export default class ContentCard extends Component {
  render() {
    return (
      <div className="content-card-wrap">
        <div className="content-card-item">
          <div className="img-box">
            <a href="https://www.baidu.com">
              <img alt="" src="https://cdn.sspai.com/article/208a6a92-adf1-ba1d-5d06-2ec378d94193.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400/interlace/1" className="card-image" />
            </a>
          </div>
          <div className="card-content">
            <a href="/post/59703" target="_blank" className="pc_card">
              <div className="title text_ellipsis2">
                如何做课堂笔记更高效？我的 iPad + Notability 使用经验分享
              </div>
            </a>
            {/* <div data-v-150e9f12="" class="card_bottom pc_card">
              <div data-v-150e9f12="" class="left">
                <div data-v-150e9f12="" class="pic_box">
                  <a data-v-1e1ec6d5="" data-v-150e9f12="" href="/u/9s5ug23q" target="_blank"><img data-v-150e9f12="" data-v-1e1ec6d5="" src="https://cdn.sspai.com/2020/03/27/4ca175e07e34ef70999d7c068790dbde.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1" alt="" class="header" data-src="https://cdn.sspai.com/2020/03/27/4ca175e07e34ef70999d7c068790dbde.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1" lazy="loaded"></a><a data-v-1e1ec6d5="" data-v-150e9f12="" href="/u/9s5ug23q" target="_blank"><span data-v-150e9f12="" data-v-1e1ec6d5="" class="name"><span data-v-150e9f12="" data-v-1e1ec6d5="" class="text_ellipsis">Elenalin_青青</span></span></a></div><div data-v-150e9f12="" class="pic_box time"><span data-v-150e9f12="">19小时前</span></div></div><div data-v-150e9f12="" class="right"><div data-v-150e9f12="" class="pic_box"><i data-v-150e9f12="" class="icon icon-card_lightningCard"></i><span data-v-150e9f12="" class="name">152</span></div><a data-v-1e1ec6d5="" data-v-150e9f12="" href="/post/59703#comment-box" target="_blank" class="pic_box"><i data-v-150e9f12="" data-v-1e1ec6d5="" class="icon icon-card_commentCard"></i><span data-v-150e9f12="" data-v-1e1ec6d5="" class="name">62</span></a></div></div> */}
          </div>
        </div>
      </div>
    )
  }
}
