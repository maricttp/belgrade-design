import React, { Component } from 'react'
import classNames from 'classnames'

import Home from '../components/home/Home'
import styles from '../styles/index.module.scss'

class IndexPage extends Component {
  componentDidMount () {
    const ScrollMagic = require('scrollmagic')
    let controller = new ScrollMagic.Controller()
    // Home Handler
    const home_scene = new ScrollMagic.Scene({
      triggerElement: '#home', // point of execution
      duration: window.innerHeight -100, // pin element for the window height
      triggerHook: 0, // don't trigger until #next-ID hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    }).setPin('#home-element') // the element we want to pin

    //Skill &  Tools Handler
    const skill_tools_scene = new ScrollMagic.Scene({
      triggerElement: '#skill-tools',
      duration: window.innerHeight,
      triggerHook: 0,
    }).setPin('#skill-tools-element')

    // Projects Handler
    const projects_scene = new ScrollMagic.Scene({
      triggerElement: '#projects',
      duration: window.innerHeight,
      triggerHook: 0,
    }).setPin('#projects-element')

    // Team Handler
    const team_scene = new ScrollMagic.Scene({
      triggerElement: '#team',
      duration: window.innerHeight,
      triggerHook: 0,

    }).setPin('#team-element')

    // Office Handler
    const office_scene = new ScrollMagic.Scene({
      triggerElement: '#office',
      duration: window.innerHeight,
      triggerHook: 0,

    }).setPin('#office-element')

    // City Handler
    const city_scene = new ScrollMagic.Scene({
      triggerElement: '#city',
      duration: window.innerHeight,
      triggerHook: 0,

    }).setPin('#city-element')

    // Contact Handler
    const contact_scene = new ScrollMagic.Scene({
      triggerElement: '#contact',
      duration: window.innerHeight,
      triggerHook: 0,

    }).setPin('#contact-element')

    // Add Scenes to ScrollMagic Controller
    controller.addScene([
      home_scene,
      skill_tools_scene,
      projects_scene,
      team_scene,
      office_scene,
      city_scene,
      contact_scene
    ])
  }

  render () {
    return (
      <div className={styles.content}>
        <main className={styles.fullScreen}>
          <section id="home" >
            <div id="home-element">
              <div className={styles.fullScreen}>
               {/*Home Component*/}
               <Home />
              </div>
            </div>
          </section>

          <section id="skill-tools" className={classNames({[styles.fullScreen]: true, [styles.orange]: true})}>
            <div id="skill-tools-element">
              {/*Skill & Tools Component*/}
            </div>
          </section>

          <section id="projects" className={classNames({[styles.fullScreen]: true, [styles.red]: true})}>
            <div id="projects-element">
              {/*Projects Component*/}
            </div>
          </section>

          <section id="team" className={classNames({[styles.fullScreen]: true, [styles.blue]: true})}>
            <div id="team-element">
              {/*Team Component*/}
            </div>
          </section>
          <section id="office" className={classNames({[styles.fullScreen]: true, [styles.orange]: true})}>
            <div id="office-element">
              {/*Office Component*/}
            </div>
          </section>
          <section id="city" className={classNames({[styles.fullScreen]: true, [styles.red]: true})}>
            <div id="city-element">
              {/*The City Component*/}
            </div>
          </section>
          <section id="contact" className={classNames({[styles.fullScreen]: true, [styles.blue]: true})}>
            <div id="contact-element">
              {/*Contact Component*/}
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default IndexPage
