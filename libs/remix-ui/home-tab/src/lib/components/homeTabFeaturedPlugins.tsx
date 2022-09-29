/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import PluginButton from './pluginButton'
import { ThemeContext, themes } from '../themeContext'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CustomNavButtons from './customNavButtons'
declare global {
  interface Window {
    _paq: any
  }
}
const _paq = window._paq = window._paq || [] //eslint-disable-line

interface  HomeTabFeaturedPluginsProps {
  plugin: any
}

function HomeTabFeaturedPlugins ({plugin}: HomeTabFeaturedPluginsProps) {
  const [state, setState] = useState<{
    themeQuality: { filter: string, name: string },
  }>({
    themeQuality: themes.light,
  })

  const startSolidity = async () => {
    await plugin.appManager.activatePlugin(['solidity', 'udapp', 'solidityStaticAnalysis', 'solidityUnitTesting'])
    plugin.verticalIcons.select('solidity')
    _paq.push(['trackEvent', 'pluginManager', 'userActivate', 'solidity'])
  }
  const startStarkNet = async () => {
    await plugin.appManager.activatePlugin('starkNet_compiler')
    plugin.verticalIcons.select('starkNet_compiler')
    _paq.push(['trackEvent', 'pluginManager', 'userActivate', 'starkNet_compiler'])
  }
  const startSolhint = async () => {
    await plugin.appManager.activatePlugin(['solidity', 'solhint'])
    plugin.verticalIcons.select('solhint')
    _paq.push(['trackEvent', 'pluginManager', 'userActivate', 'solhint'])
  }
  const startLearnEth = async () => {
    await plugin.appManager.activatePlugin(['solidity', 'LearnEth', 'solidityUnitTesting'])
    plugin.verticalIcons.select('LearnEth')
    _paq.push(['trackEvent', 'pluginManager', 'userActivate', 'learnEth'])
  }
  const startSourceVerify = async () => {
    await plugin.appManager.activatePlugin(['solidity', 'sourcify'])
    plugin.verticalIcons.select('sourcify')
    _paq.push(['trackEvent', 'pluginManager', 'userActivate', 'sourcify'])
  }
  const startPluginManager = async () => {
    plugin.verticalIcons.select('pluginManager')
  }
  
  return (
    <div className="pl-2 w-100" id="hTFeaturedPlugins">
      <label className="pl-2" style={{fontSize: "1.2rem"}}>Featured Plugins</label>
      <div className="w-100 d-flex flex-column">
        <ThemeContext.Provider value={ state.themeQuality }>
          <Carousel 
            customButtonGroup={<CustomNavButtons next={undefined} previous={undefined} goToSlide={undefined} />}
            arrows={false}
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={{ desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4} }}
            renderButtonGroupOutside={true}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            keyBoardControl={true}
            containerClass="carousel-container"
            deviceType={"desktop"}
            itemClass="carousel-item-padding-10-px"
          >
            <PluginButton imgPath="assets/img/solidityLogo.webp" envID="solidityLogo" envText="Solidity" description="Compile, test and analyse smart contract." remixMaintained={true} callback={() => startSolidity()} />
            <PluginButton imgPath="assets/img/starkNetLogo.webp" envID="starkNetLogo" envText="StarkNet" description="Compile and deploy contracts with Cairo, a native language for StarkNet." l2={true} callback={() => startStarkNet()} />
            <PluginButton imgPath="assets/img/solhintLogo.webp" envID="solhintLogo" envText="Solhint linter" description="Solhint is an open source project for linting Solidity code." callback={() => startSolhint()} />
            <PluginButton imgPath="assets/img/sourcifyNewLogo.webp" envID="sourcifyLogo" envText="Sourcify" description="Solidity contract and metadata verification service." callback={() => startSourceVerify()} />
            <PluginButton imgPath="assets/img/moreLogo.webp" envID="moreLogo" envText="Plugin Manager" description="Discover more plugins." callback={startPluginManager} />
          </Carousel>
        </ThemeContext.Provider>
      </div>
    </div>
  )
}

export default HomeTabFeaturedPlugins
