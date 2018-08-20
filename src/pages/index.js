import React, { Component } from 'react'
import classNames from 'classnames'
import { translate } from 'react-i18next'

import Dzoni from '../../assets/images/team-portrait-nikola.png'
import Alex from '../../assets/images/team-portrait-aleks.png'
import Yoma from '../../assets/images/team-portrait-maja.png'
import Katrina from '../../assets/images/team-portrait-katrina.png'
import Jelena from '../../assets/images/team-portrait-jelena.png'
import Katarina from '../../assets/images/team-portrait-kaca.png'


import Header from '../components/header/Header'
import Home from '../components/home/Home'
import SkillsTools from '../components/skillsTools/SkillsTools'
import Team from '../components/team/Team'
import Designer from '../components/designer/Designer'
import Office from '../components/office/Office'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'

import ArrowButton from '../components/reusable/arrow-button/ArrowButton'

import style from '../styles/index.module.scss'

import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import TheCity from '../components/theCity/TheCity'
const { changeFullpageSlide, changeHorizontalSlide } = Fullpage;

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
  activeSlide: 0,
};

const horizontalSliderProps = {
  name: 'horizontalSlider', // name is required
  infinite: true,
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

  buildVerticalSlide (isVerticalSlide, activeSlide, h) {
    this.setState({
      active: {
        isVerticalSlide: isVerticalSlide,
        Fullpage: activeSlide,
        horizontalSlider: 0,
      }
    });
  }

  renderDesignTeamInformation() {
    const {t} = this.props;
    const team = [
      {
        "firstName": "nikola.",
        "lastName": "vukašinović.",
        "jobDescription": t("teamCreativeDirector"),
        "introduction": t("teamDzoni"),
        "image": Dzoni,
        "socialNetoworks": [
          { "name": "email", "src": "nikola.vukasinovic@namics.com"},
          { "name": "behance", "src": " https://www.behance.net/NikolaVukasinovic"},
          { "name": "instagram", "src": "https://www.instagram.com/nikola.ola.la/"},
          { "name": "linkedIn", "src": "https://www.linkedin.com/in/nikolavukasinovic/"},
        ]
      },
      {
        "firstName": "aleksandra.",
        "lastName": "ninković.",
        "jobDescription": t("teamSeniorExperienceDesigner"),
        "introduction": t("teamAlex"),
        "image": Alex,
        "socialNetoworks": [
          { "name": "email", "src": "aleksandra.ninkovic@namics.com"},
          { "name": "instagram", "src": "https://www.instagram.com/vegesign/"},
          { "name": "linkedIn", "src": "https://www.linkedin.com/in/aleksandra-ninkovi%C4%87-b4782819/"},
        ]
      },
      {
        "firstName": "marija.",
        "lastName": "djurdjević.",
        "jobDescription": t("teamExperienceDesigner"),
        "introduction": t("teamYoma"),
        "image": Yoma,
        "socialNetoworks": [
          { "name": "email", "src": "marija.djurdjevic@namics.com"},
          { "name": "facebook", "src": "https://www.facebook.com/marijadj1"},
          { "name": "twitter", "src": "https://twitter.com/dinamitara"},
          { "name": "instagram", "src": "https://www.instagram.com/_yoma/"},
          { "name": "linkedIn", "src": "https://www.linkedin.com/in/mdjurdjevic/"},
        ]
      },
      {
        "firstName": "katrina.",
        "lastName": "radić.",
        "jobDescription": t("teamExperienceDesigner"),
        "introduction": t("teamKatrina"),
        "image": Katrina,
        "socialNetoworks": [
          { "name": "email", "src": "katrina.radic@namics.com"},
          { "name": "behance", "src": "https://www.behance.net/katrinaradic"},
          { "name": "dribbble", "src": "https://dribbble.com/katrinaradic"},
          { "name": "instagram", "src": "http://www.autgram.com/u/katrinaradicdesign"},
          { "name": "linkedIn", "src": "https://www.linkedin.com/in/katrina-radic"},
        ]
      },
      {
        "firstName": "jelena.",
        "lastName": "slović.",
        "jobDescription": t("teamExperienceDesigner"),
        "introduction": t("teamJelena"),
        "image": Jelena,
        "socialNetoworks": [
          { "name": "email", "src": "jelena.slovic@namics.com"},
          { "name": "behance", "src": "https://www.behance.net/jelenaslovic"},
          { "name": "dribbble", "src": "https://dribbble.com/jelslo"},
          { "name": "instagram", "src": "https://instagram.com/jelslo"},
          { "name": "linkedIn", "src": "https://www.linkedin.com/in/jelenaslovic/"},
        ]
      },
      {
        "firstName": "katarina.",
        "lastName": "pavlović.",
        "jobDescription": t("teamSeniorExperienceDesigner"),
        "introduction": t("teamKatarina"),
        "image": Katarina,
        "socialNetoworks": [
          { "name": "email", "src": "katarina.pavlovic@namics.com"},
          { "name": "behance", "src": "https://www.behance.net/katarinapavlovic"},
          { "name": "linkedIn", "src": "https://rs.linkedin.com/in/katarina-pavlovic-948050b8"}
        ]
      }
    ]
    const total = team.length

    return team.map((value, index) => {
      return (
        <Slide>
          <Designer 
            data={value}
            number={index+1}
            total={total}
            buildVerticalSlide={() => { this.buildVerticalSlide(true, 3)}} />
        </Slide>
      )
    })
  }

  renderDots(total, activeIndex) {
    let list = [];
    for (let i = 0; i < total; i++) {
      const dotsClassName = classNames(
        style.sliderDot,
        {[style.sliderDotActive]: i === activeIndex},
      );
      list.push(
        <li 
          key={i}
          className={dotsClassName}
          onClick={changeHorizontalSlide.bind(null, horizontalSliderProps.name, i)}
        >
        </li>
      )
    }
    return list;
  }

  render () {

    const { active } = this.state;
    const currentActive = active.Fullpage;
    const currentHorizontalActive = active.horizontalSlider;
    horizontalSliderProps.slides = this.renderDesignTeamInformation()
  
    const prevSlide = changeHorizontalSlide.bind(null, horizontalSliderProps.name, currentHorizontalActive - 1);
    const nextSlide = changeHorizontalSlide.bind(null, horizontalSliderProps.name, currentHorizontalActive + 1);


    const horizontalPageOptions = [
      <HorizontalSlider id='horizontal-slider-1' {...horizontalSliderProps}>
        <ArrowButton prevSlide={prevSlide} nextSlide={nextSlide}/>
        <ul className={style.sliderDots}>{this.renderDots(horizontalSliderProps.slides.length, currentHorizontalActive)}</ul>
      </HorizontalSlider>
    ];

    const verticalSlides = [
      <Slide><Home /></Slide>,
      <Slide><SkillsTools /></Slide>,
      <Slide><Projects /></Slide>,
      <Slide><Team buildVerticalSlide={() => { this.buildVerticalSlide(false, 3)}} /></Slide>,
      <Slide><Office /></Slide>,
      <Slide><TheCity /></Slide>,
      <Slide><Contact /></Slide>
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

export default translate('translates')(IndexPage)
