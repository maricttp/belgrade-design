import React, { Component } from 'react'
import classNames from 'classnames'

import Header from '../components/header/Header'
import Home from '../components/home/Home'
import SkillsTools from '../components/skillsTools/SkillsTools'
import Team from '../components/team/Team'
import Designer from '../components/designer/Designer'
import Office from '../components/office/Office'
import Projects from '../components/projects/Projects'

import '../styles/index.module.scss'

import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
const { changeFullpageSlide } = Fullpage;

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 8,
  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 8,
  scrollSpeed: 700,
  hideScrollBars: true,
  enableArrowKeys: true,
  // optional, set the initial vertical slide
  activeSlide: 0
};

const horizontalSliderProps = {
  name: 'horizontalSlider', // name is required
  infinite: true
};

class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: {
        Fullpage: 0,
        horizontalSlider: 0,
        isVerticalSlide: false
      }
    }
    this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
    this.buildVerticalSlide = this.buildVerticalSlide.bind(this);
  }

  componentDidMount() {
    this.buildVerticalSlide(true, 0);
  }

  onSlideChangeEnd(name, props, state, newState) {
    const oldActive = this.state.active;
    const sliderState = {
      [name]: newState.activeSlide
    };

    const updatedState = Object.assign(oldActive, sliderState);
    this.setState(updatedState);
  }

  buildVerticalSlide (isVerticalSlide, activeSlide) {
    this.setState({
      active: {
        isVerticalSlide: isVerticalSlide,
        Fullpage: activeSlide,
        horizontalSlider: 0,
      }
    });
  }

  render () {

    const { active } = this.state;
    const currentActive = active.Fullpage;
    horizontalSliderProps.slides = [
      <Slide><Designer buildVerticalSlide={() => { this.buildVerticalSlide(true, 3)}} /></Slide>,
      <Slide style={{backgroundColor: 'yellow'}}><Designer buildVerticalSlide={() => { this.buildVerticalSlide(true, 3)}} /></Slide>,
      <Slide style={{backgroundColor: 'green'}}><Designer buildVerticalSlide={() => { this.buildVerticalSlide(true, 3)}} /></Slide>
    ];

    const horizontalPageOptions = [
      <HorizontalSlider id='horizontal-slider-1' {...horizontalSliderProps} />
    ];

    const verticalSlides = [
      <Slide><Home /></Slide>,
      <Slide><SkillsTools /></Slide>,
      <Slide><Projects /></Slide>,
      <Slide><Team buildVerticalSlide={() => { this.buildVerticalSlide(false, 3)}} /></Slide>,
      <Slide><Office /></Slide>,
      <Slide> City Component </Slide>,
      <Slide> Contact Component </Slide>
    ];

    fullPageOptions.slides = active.isVerticalSlide ? verticalSlides : horizontalPageOptions;

    return (
      <div>
        <Header changeFullpageSlide={changeFullpageSlide} currentActive={currentActive}  buildVerticalSlide={() => { this.buildVerticalSlide(true, 3)}} isTeamHeader={!active.isVerticalSlide} />
        <Fullpage onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions} />
      </div>
    )
  }
}

export default IndexPage
