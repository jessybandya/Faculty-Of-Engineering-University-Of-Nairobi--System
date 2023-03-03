import React from 'react'
import SoftTypography from '../../components/SoftTypography'
import Footer from '../../examples/Footer'
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar'
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { updateAuthId } from '../../redux/dataSlice'
import { auth, db } from '../../firebase'
import { Grid } from '@mui/material'
import MiniStatisticsCard from '../../examples/Cards/StatisticsCards/MiniStatisticsCard'
import BuildByDevelopers from '../../layouts/dashboard/components/BuildByDevelopers'
import WorkWithTheRockets from '../../layouts/dashboard/components/WorkWithTheRockets'
import ReportsBarChart from '../../examples/Charts/BarCharts/ReportsBarChart'
import GradientLineChart from '../../examples/Charts/LineCharts/GradientLineChart'
import gradientLineChartData from '../../layouts/dashboard/data/gradientLineChartData'
import SoftBox from '../../components/SoftBox'
import Icon from "@mui/material/Icon";
import typography from '../../assets/theme/base/typography'
import reportsBarChartData from '../../layouts/dashboard/data/reportsBarChartData'
import Projects from '../../layouts/dashboard/components/Projects'
import OrdersOverview from '../../layouts/dashboard/components/OrderOverview'
import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Typewriter from 'typewriter-effect';
import Events from '../../sub-components/Events'
import Articles from '../../sub-components/Articles'


function Admin() {
  const authId = useSelector((state) => state.authId)
  const history = useNavigate("")
  const dispatch = useDispatch();
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const [membersData, setMembers] = React.useState(0)
  const [articlesData, setArticles] = React.useState(0)
  const [eventsData, setEvents] = React.useState(0)
  const [albumsData, setAlbums] = React.useState(0)


  React.useEffect(() => {
    db.collection('users').onSnapshot((snapshot) => {
      setMembers(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  React.useEffect(() => {
    db.collection('articles').onSnapshot((snapshot) => {
      setArticles(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  React.useEffect(() => {
    db.collection('events').onSnapshot((snapshot) => {
      setEvents(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  React.useEffect(() => {
    db.collection('albums').onSnapshot((snapshot) => {
      setAlbums(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  const logout = () => {
    auth.signOut();
    history("/")
    dispatch(updateAuthId(''))
    window.location.reload();
}

  const myStyle={
      backgroundImage:"url(" +
  "images/bg/1.jpg"+")",
  height:'100px'
      };

  return (
    <DashboardLayout>
    <div className="page-wraper">
    {/* Header Top ==== */}
    <DashboardNavbar />

    {/* Header Top END ==== */}
    {/* Content */}
    <div className="page-content bg-white" style={{marginTop:-100}}>
      {/* Main Slider */}
      <div className="rev-slider">
        <div id="rev_slider_486_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="news-gallery36" data-source="gallery" style={{margin: '0px auto', backgroundColor: '#ffffff', padding: '0px', marginTop: '0px', marginBottom: '0px'}}>
          {/* START REVOLUTION SLIDER 5.3.0.2 fullwidth mode */}
          <div id="rev_slider_486_1" className="rev_slider fullwidthabanner" style={{display: 'none'}} data-version="5.3.0.2">
            <ul>	{/* SLIDE  */}
              <li data-index="rs-100" data-transition="parallaxvertical" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="error-404.html" data-rotate={0} data-fstransition="fade" data-fsmasterspeed={1500} data-fsslotamount={7} data-saveperformance="off" data-title="A STUDY ON HAPPINESS" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description="Science says that Women are generally happier">
                {/* MAIN IMAGE */}
                <img src="https://www.kenyans.co.ke/files/styles/article_style/public/images/media/UoN%20Graduates%20degree.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                {/* LAYER NR. 1 */}
                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-100-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5, backgroundColor: 'rgba(2, 0, 11, 0.80)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: '0px'}}> </div>	
                {/* LAYER NR. 2 */}
                <div className="tp-caption Newspaper-Title   tp-resizeme" id="slide-100-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['250','250','250','240']" data-fontsize="['50','50','50','30']" data-lineheight="['55','55','55','35']" data-width="full" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[0,0,0,0]" style={{zIndex: 6, fontFamily: 'rubik', fontWeight: 700, textAlign: 'center', whiteSpace: 'normal'}}>
                  <i>University Of Nairobi</i>
                </div>
                {/* LAYER NR. 3 */}
                <div className="tp-caption Newspaper-Subtitle   tp-resizeme" id="slide-100-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['210','210','210','210']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, whiteSpace: 'nowrap', color: '#fff', fontFamily: 'rubik', fontSize: '18px', fontWeight: 400}}>
                  <i>Better Management for Better</i>
                </div>
                {/* LAYER NR. 3 */}
                <div className="tp-caption Newspaper-Subtitle   tp-resizeme" id="slide-100-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['320','320','320','290']" data-width="['800','800','700','420']" data-height="['100','100','100','120']" data-whitespace="unset" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, textTransform: 'capitalize', whiteSpace: 'unset', color: '#fff', fontFamily: 'rubik', fontSize: '18px', lineHeight: '28px', fontWeight: 400}}>
                <Typewriter
                options={{
                  strings: ['Faculty Of Engineering', 'Initialtiative for all students'],
                  autoStart: true,
                  loop: true,
                }}
              />
                </div>
                {/* LAYER NR. 4 */}
              </li>
              <li data-index="rs-200" data-transition="parallaxvertical" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="assets/images/slider/slide1.jpg" data-rotate={0} data-fstransition="fade" data-fsmasterspeed={1500} data-fsslotamount={7} data-saveperformance="off" data-title="A STUDY ON HAPPINESS" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description="Science says that Women are generally happier">
                {/* MAIN IMAGE */}
                <img src="https://geospatial.uonbi.ac.ke/sites/default/files/inline-images/UniversityOfNairobiTowersProject_banner.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                {/* LAYER NR. 1 */}
                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-200-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5, backgroundColor: 'rgba(2, 0, 11, 0.80)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: '0px'}}> 
                </div>
                {/* LAYER NR. 2 */}
                <div className="tp-caption Newspaper-Title   tp-resizeme" id="slide-200-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['250','250','250','240']" data-fontsize="['50','50','50','30']" data-lineheight="['55','55','55','35']" data-width="full" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[0,0,0,0]" style={{zIndex: 6, fontFamily: 'rubik', fontWeight: 700, textAlign: 'center', whiteSpace: 'normal', textTransform: 'uppercase'}}>
                  <i>University Of Nairobi</i>
                </div>
                {/* LAYER NR. 3 */}
                <div className="tp-caption Newspaper-Subtitle   tp-resizeme" id="slide-200-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['210','210','210','210']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, whiteSpace: 'nowrap', textTransform: 'uppercase', color: '#fff', fontFamily: 'rubik', fontSize: '18px', fontWeight: 400}}>
                  <i>Better Management for Better</i>
                </div>
                {/* LAYER NR. 3 */}
                <div className="tp-caption Newspaper-Subtitle   tp-resizeme" id="slide-200-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['320','320','320','290']" data-width="['800','800','700','420']" data-height="['100','100','100','120']" data-whitespace="unset" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, textTransform: 'capitalize', whiteSpace: 'unset', color: '#fff', fontFamily: 'rubik', fontSize: '18px', lineHeight: '28px', fontWeight: 400}}>
                <Typewriter
                options={{
                  strings: ['Faculty Of Engineering', 'Initialtiative for all students'],
                  autoStart: true,
                  loop: true,
                }}
              />
                </div>
                {/* LAYER NR. 4 */}
              </li>
              {/* SLIDE  */}
            </ul>
          </div>{/* END REVOLUTION SLIDER */}  
        </div>  
      </div>  
      {/* Main Slider */}
      <div className="content-block">
        {/* Our Services */}
        <div className="section-area content-inner service-info-bx">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="service-bx">
                  <div className="action-box">
                    <img src="https://e7.pngegg.com/pngimages/967/870/png-clipart-university-of-nairobi-nairobi-innovation-week-sokoine-university-of-agriculture-academic-degree-others-miscellaneous-university.png" alt="" />
                  </div>
                  <div className="info-bx text-center">
                    <div className="feature-box-sm radius bg-white">
                      <i className="fa fa-bank text-primary" />
                    </div>
                    <h4><a>Guidance</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="service-bx">
                  <div className="action-box">
                    <img src="https://e7.pngegg.com/pngimages/967/870/png-clipart-university-of-nairobi-nairobi-innovation-week-sokoine-university-of-agriculture-academic-degree-others-miscellaneous-university.png" alt="" />
                  </div>
                  <div className="info-bx text-center">
                    <div className="feature-box-sm radius bg-white">
                      <i className="fa fa-book text-primary" />
                    </div>
                    <h4><a>Education</a></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="service-bx m-b0">
                  <div className="action-box">
                    <img src="https://e7.pngegg.com/pngimages/967/870/png-clipart-university-of-nairobi-nairobi-innovation-week-sokoine-university-of-agriculture-academic-degree-others-miscellaneous-university.png" alt="" />
                  </div>
                  <div className="info-bx text-center">
                    <div className="feature-box-sm radius bg-white">
                      <i className="fa fa-file-text-o text-primary" />
                    </div>
                    <h4><a>Exploration</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Services END */}

        {/* Form */}
        <div className="section-area section-sp1 ovpr-dark bg-fix online-cours" style={{backgroundImage: 'url(assets/images/background/bg1.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center text-white">
                <h2><i>Summury</i></h2>
              </div>
            </div>
            <div className="mw800 m-auto">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="cours-search-bx m-b30">
                    <div className="icon-box">
                      <h3><i className="ti-user" /><span className="counter">5</span></h3>
                    </div>
                    <span className="cours-search-text">Members</span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="cours-search-bx m-b30">
                    <div className="icon-box">
                      <h3><i className="ti-book" /><span className="counter">6</span></h3>
                    </div>
                    <span className="cours-search-text">Departments</span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="cours-search-bx m-b30">
                    <div className="icon-box">
                      <h3><i className="ti-layout-list-post" /><span className="counter">20</span></h3>
                    </div>
                    <span className="cours-search-text">Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form END */}

        <div className="section-area section-sp2 bg-fix ovbl-dark" style={{backgroundImage: 'url(assets/images/background/bg1.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-white heading-bx left">
                <h2 className="title-head text-uppercase">what people <span>say</span></h2>
              </div>
            </div>
            <div className="testimonial-carousel owl-carousel owl-btn-1 col-12 p-lr0">
              <div className="item">
                <div className="testimonial-bx">
                  <div className="testimonial-thumb">
                    <img src="assets/images/testimonials/pic1.jpg" alt="" />
                  </div>
                  <div className="testimonial-info">
                    <h5 className="name">Jessy Bandya</h5>
                    <p>-Civil/Software Engineer</p>
                  </div>
                  <div className="testimonial-content">
                    <p>Talking is easy, just show me the code base:)</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-bx">
                  <div className="testimonial-thumb">
                    <img src="assets/images/testimonials/pic2.jpg" alt="" />
                  </div>
                  <div className="testimonial-info">
                    <h5 className="name">Odero Phelix</h5>
                    <p>-Consultant Engineer @ Rothoblaas</p>
                  </div>
                  <div className="testimonial-content">
                  <p>Talking is easy, just show me the code base:)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials END */}
      </div>
      {/* contact area END */}
    </div>
    {/* Content END*/}
    {/* Footer ==== */}
     <Footer />
    {/* Footer END ==== */}
  </div>
    </DashboardLayout>
  )
}

export default Admin