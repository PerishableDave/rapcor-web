import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "./style.css"

export default class Home extends Component {
  render () {
    return (
      <div>
        <div id="hero" className="d-flex align-items-center position-relative u-bg-gradient-v1 u-space-4-top u-space-5-top--md u-space-0--lg" style={{top: -88, "max-height": 300}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="g-mb-32">
                  <h1 className="display-4 font-size-48--md-down mb-3">Introducing Rapcor</h1>
                  <p>
                    Find experienced medical clinicians quickly.
                  </p>
                </div>

                <div className="d-flex align-items-center">
                  <Link className="btn u-btn-primary--air u-btn-wide transition-3d-hover" to="/providers/signup" >Get Started</Link>
                </div>
              </div>
            </div>
          </div>

          <div id="heroBackground" className="d-none d-lg-block position-absolute-top-right-0 pr-0">
            <figure className="w-100">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 1374.7 1083.6" style={{"enable-background": "new 0 0 1374.7 1083.6"}} xmlSpace="preserve">
                <path className="u-fill-primary" opacity=".05" d="M285.2,170.1c-94.5,8.6-181.2,57.4-235.9,134.8C-34.7,423.6-54.5,621.5,349,879.8
                  c636.5,407.6,600,9.3,591.9-47.4c-0.8-5.5-1.4-11.1-2-16.6l-34.2-374.1C888.4,262,729.2,129.6,549.4,146L285.2,170.1z"/>
                <g>
                  <defs>
                    <path id="heroBlock1" d="M1374.7,0H687.6l-278,279.7c-150,150.9-148.1,395.3,4.4,543.8l0,0C554.1,960,774.9,968.7,925.4,843.6
                      l449.3-373.4V0z"/>
                  </defs>
                  <clipPath id="heroBlock2">
                    <use xlinkHref="#heroBlock1"  style={{"overflow": "visible"}}/>
                  </clipPath>
                  <g transform="matrix(1 0 0 1 0 0)" style={{"clip-path": "url(#heroBlock2)"}}>
                    <image style={{overflow: "visible"}} width="750" height="750" xlinkHref="/images/hero.jpg"  transform="matrix(1.4462 0 0 1.4448 290.09 0)"></image>
                  </g>
                </g>
              </svg>
            </figure>
          </div>
        </div>


        <div className="container">
          <div className="row justify-content-lg-between align-items-center ">
            <div className="col-md-6 col-lg-5 order-md-2 mb-7 mb-md-0">
              <div className="pl-md-4">
                <div className="media mb-7">
                  <div className="d-flex mr-3">
                    <span className="u-icon u-icon-success--air u-icon--sm rounded-circle">
                      <span className="u-icon__inner font-weight-bold">A.</span>
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="h5 text-success">Staff with confidence</h3>
                    <p>Find clinicians with the exact experience you need.</p>
                  </div>
                </div>

                <div className="media mb-7">
                  <div className="d-flex mr-3">
                    <span className="u-icon u-icon-success--air u-icon--sm rounded-circle">
                      <span className="u-icon__inner font-weight-bold">B.</span>
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="h5 text-success">Save on fees</h3>
                    <p>Rapcor matches you directly with clinicians so you can save on costs.</p>
                  </div>
                </div>

                <div className="media mb-7">
                  <div className="d-flex mr-3">
                    <span className="u-icon u-icon-success--air u-icon--sm rounded-circle">
                      <span className="u-icon__inner font-weight-bold">C.</span>
                    </span>
                  </div>
                  <div className="media-body">
                    <h3 className="h5 text-success">Rapid turnaround</h3>
                    <p>Let Rapcor's software find you the help you need quickly.</p>
                  </div>
                </div>


                <Link className="btn btn-success u-btn-success u-btn-wide u-btn-pill transition-3d-hover" to="/providers/signup">Sign Up <span className="fa fa-angle-right ml-2"></span></Link>
              </div>
            </div>

            <div className="col-md-6 order-md-1">
              <figure>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 614.8 747.7" style={{"enable-background": "new 0 0 614.8 747.7"}} xmlSpace="preserve">
                  <path className="u-fill-success" opacity=".05" d="M428.5,138.9C489.6,144.5,545.6,176,581,226c54.3,76.8,67.1,204.7-193.8,371.7c-411.5,263.5-387.9,6-382.7-30.6
                    c0.5-3.6,0.9-7.2,1.3-10.7l22.1-241.9c10.6-116.2,113.5-201.8,229.8-191.1L428.5,138.9z"/>
                  <g>
                    <defs>
                      <path id="mockupExample3_1" d="M446.2,729.7L446.2,729.7C310.4,782.7,156,714.9,103,579.1L18,361.2C-34.9,225.4,32.8,71,168.6,18l0,0
                        c135.8-53,290.2,14.8,343.2,150.6l85,217.9C649.8,522.3,582,676.7,446.2,729.7z"/>
                    </defs>
                    <clipPath id="mockupExample3_2">
                      <use xlinkHref="#mockupExample3_1"  style={{overflow: "visible"}}/>
                    </clipPath>
                    <g style={{"clip-path": "url(#mockupExample3_2)"}}>
                      <image style={{overflow: "visible"}} width="650" height="750" xlinkHref="/images/feature-1.jpg"  transform="matrix(1 0 0 1 -3.177470e-02 -0.9532)"></image>
                    </g>
                  </g>
                  <g>
                    <circle className="u-fill-danger" cx="488.6" cy="693.8" r="16.3"/>
                    <circle className="u-fill-success" cx="482" cy="632.6" r="10.6"/>
                    <circle className="u-fill-primary" cx="537.8" cy="655.9" r="21.6"/>
                    <circle className="u-fill-warning" cx="576" cy="708.1" r="3.9"/>
                  </g>
                </svg>
              </figure>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
