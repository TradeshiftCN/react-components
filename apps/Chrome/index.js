import { Link } from '@reach/router'
import Icon from '@tradeshift/react-components/lib/Icon'
import Header from '@tradeshift/react-components/lib/Header'
import { Nav, NavItem, NavItemGroup, SubNav } from 'earth-ui/lib/Nav'
import { Tab, TabList, Tabs } from '@tradeshift/react-components/lib/Tabs'
import Tooltip from '@tradeshift/react-components/lib/Tooltip'
import PropTypes from 'prop-types'
import React from 'react'
import { Layout, LayoutContent, LayoutSidebar } from 'widgets/Layout'
import Scrollbar from 'widgets/Scrollbar'
import { navigate } from '../../HashRouter'
import { nav as components } from '../config.js'
import pkg from '../../../package.json'
import './index.less'

const getTabsByComponentName = (components, componentName) => {
  for (let c of components) {
    if (c.name === componentName) {
      return c.tabs
    }
    if (c.components) {
      const tabs = getTabsByComponentName(c.components, componentName)
      if (tabs) return tabs
    }
  }
}

const routerWithDynamicSegments = ['components/', 'start/', 'design/']

function renderNavBottom () {
  return (
    <div className="components__navbar-bottom">
      <div className="components__navbar-bottom-image">
        <img
          className="components__navbar-bottom-image-icon"
          src="./svg/avatarPlaceholder.svg"
          alt="TS"
        />
      </div>
      <div className="components__navbar-bottom-user">
        <span className="components__navbar-bottom-user-name">{`v${
          pkg.version
        }`}</span>
        <span className="components__navbar-bottom-user-company">Chinese</span>
      </div>
      {/* <div className="components__navbar-bottom-logout"> */}
      {/*  <Tooltip title="Unfinished feature"> */}
      {/*    <Icon type="logout" className="components__navbar-bottom-logout-icon" /> */}
      {/*  </Tooltip> */}
      {/* </div> */}
      <div className="components__navbar-bottom-settings">
        <Tooltip title="Unfinished feature">
          <Icon
            type="settings"
            className="components__navbar-bottom-settings-icon"
          />
        </Tooltip>
      </div>
    </div>
  )
}

class Components extends React.Component {
  constructor (props) {
    super()
    this.componentsMap = {}
    this.state = {
      open: false
    }
  }

  toggle (open) {
    this.setState({ open })
  }

  switchRoute (route) {
    if (route) {
      navigate(`/${route}`)
    }
  }

  handleItemClick = props => {
    this.toggle(false)
    this.switchRoute(props.id)
  }

  handleTabClick = doc => {
    this.switchRoute(doc)
  }

  renderTitle (docName) {
    const nameBeforeSlash = docName.split('/')[0]
    const nameAfterSlash = routerWithDynamicSegments.some(v =>
      docName.includes(v)
    )
      ? docName.split('/')[1]
      : docName
    const componentName = (nameBeforeSlash === 'components'
      ? nameAfterSlash
      : nameBeforeSlash
    ).split('-')[0]
    const component = this.componentsMap[componentName]
    const { name = '', cn = '' } = component || {}
    const title = name === 'intro' ? 'Tradeshift UI' : `${name} ${cn}`
    const tabs = getTabsByComponentName(components, name)
    return (
      <Header
        className="components__title"
        icon="./svg/appLogo.svg"
        title={title}
      >
        {!!tabs && (
          <Tabs activeKey={nameAfterSlash}>
            <TabList>
              {!!tabs.length &&
                tabs.map(tab => (
                  <Tab
                    activeKey={tab.doc}
                    key={tab.doc}
                    onClick={() =>
                      this.handleTabClick(`${nameBeforeSlash}/${tab.doc}`)
                    }
                  >
                    {tab.label}
                  </Tab>
                ))}
            </TabList>
          </Tabs>
        )}
      </Header>
    )
  }

  renderNavItem (item, position, path) {
    this.componentsMap[item.name] = item
    if (position === 'outside') {
      const id = item.tabs ? `${item.path}/${item.tabs[0].doc}` : item.name
      return (
        <NavItem
          id={id}
          key={item.name}
          title={item.cn}
          icon={`./svg/icons.svg#${item.icon}`}
        />
      )
    }
    const nameAfterSlash =
      (item.tabs && item.tabs.length && item.tabs[0].doc) || item.name
    const id = path ? `${path}/${nameAfterSlash}` : nameAfterSlash
    return (
      <NavItem id={id} key={item.name}>
        <span>{item.name}</span>
        <span className="chinese">{item.cn}</span>
      </NavItem>
    )
  }

  renderNavItemGroup (itemGroup) {
    return (
      <NavItemGroup title={itemGroup.group} key={itemGroup.group}>
        {itemGroup.components.map(component => this.renderNavItem(component))}
      </NavItemGroup>
    )
  }

  render () {
    const { open } = this.state
    let { children, '*': childComponentPath } = this.props
    return (
      <div className="components">
        <Layout open={open} onToggle={open => this.toggle(open)}>
          <LayoutSidebar>
            <div className="components__navbar-top">
              <Link to="/" className="components__navbar-top-logo">
                <svg width="170px" height="20px" viewBox="0 0 170 20">
                  <defs>
                    <polygon
                      id="path-1"
                      points="107.54845 19.9855422 0.0147265451 19.9855422 0.0147265451 0.110120482 53.7815883 0.110120482 107.54845 0.110120482 107.54845 19.9855422"
                    />
                  </defs>
                  <g
                    id="Mobile"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="chrome-apps-android-old"
                      transform="translate(-121.000000, -45.000000)"
                    >
                      <g
                        id="logo_search"
                        transform="translate(0.000000, 22.000000)"
                      >
                        <g
                          id="logo-full"
                          transform="translate(121.000000, 23.000000)"
                        >
                          <g id="Group-6">
                            <mask id="mask-2" fill="white">
                              <use xlinkHref="#path-1" />
                            </mask>
                            <g id="Clip-2" />
                            <path
                              d="M41.0809249,11.9893976 L43.341695,4.01566265 L44.7461165,4.01566265 L47.0316763,11.9893976 L41.0809249,11.9893976 L41.0809249,11.9893976 Z M28.3532628,6.8373494 C28.3532628,7.94746988 28.0916212,8.5426506 27.4195998,8.94024096 C26.9785398,9.19951807 26.3607612,9.30891566 25.5188937,9.30891566 L22.3347692,9.32289157 L22.3347692,4.01566265 L25.7380738,4.01566265 C26.0522401,4.02626506 26.3416167,4.06024096 26.5917225,4.10795181 C26.9157065,4.17301205 27.1940382,4.26457831 27.4195998,4.39903614 C28.0916212,4.79518072 28.3532628,5.37445783 28.3532628,6.48409639 L28.3532628,6.8373494 L28.3532628,6.8373494 Z M29.5129782,11.1643373 C32.1301307,10.7281928 33.1506803,8.8946988 33.3821325,6.89879518 C33.4145309,6.61927711 33.4410387,6.32409639 33.4307301,6.0146988 C33.3926865,4.88819277 33.0453855,4.02722892 33.0247683,3.96578313 C32.4609871,2.29493976 30.6888928,1.00843373 29.1993028,0.666506024 C28.3530173,0.472048193 27.5327488,0.435662651 26.4530476,0.406506024 L17.5258159,0.406506024 C17.2622108,0.406506024 17.0535847,0.585783133 17.0535847,0.817349398 L17.0535847,19.3322892 C17.0535847,19.5645783 17.2369302,19.7183133 17.5002899,19.7183133 L21.9167808,19.7183133 C22.1771952,19.7183133 22.3347692,19.5645783 22.3347692,19.3322892 L22.3347692,12.8243373 L25.5215936,12.8243373 L30.2976576,19.4616867 C30.3764446,19.5915663 30.6118239,19.7183133 30.8989916,19.7183133 L38.6873704,19.7183133 C38.9227497,19.7183133 39.1316212,19.5378313 39.1848822,19.3084337 L40.1119182,16.1240964 L48.009028,16.1240964 L48.9296825,19.2573494 C48.9824526,19.4872289 49.2178319,19.7183133 49.4782463,19.7183133 L53.8854104,19.7183133 C54.1207897,19.7183133 54.3038897,19.5645783 54.3038897,19.3840964 C54.3038897,19.3590361 54.3038897,19.3322892 54.2766456,19.3084337 L49.5889409,4.38915663 L49.558506,4.2939759 L49.5558061,4.28746988 L48.4329071,0.713493976 C48.3794006,0.535180723 48.1967915,0.406506024 47.9893926,0.406506024 L40.2137768,0.406506024 C40.0063779,0.406506024 39.8218052,0.535180723 39.769526,0.713493976 L34.5227034,17.3007229 L30.3244108,11.7190361 C30.3244108,11.7190361 29.9788279,11.1643373 29.5129782,11.1643373 L29.5129782,11.1643373 Z"
                              id="Fill-1"
                              fill="#FFFFFF"
                              mask="url(#mask-2)"
                            />
                            <path
                              d="M101.30194,8.04096386 C99.1587372,7.70819277 97.4325407,7.60457831 97.4325407,5.93686747 C97.4325407,5.24674699 97.6774922,4.80024096 98.0778088,4.50987952 C98.138924,4.46698795 98.2064206,4.42746988 98.2744082,4.38963855 C98.3399413,4.35493976 98.4094015,4.32240964 98.4805798,4.29373494 C99.0200622,4.07156627 99.7188368,4.01301205 100.465964,4.01301205 C101.450188,4.01301205 102.372315,4.12481928 103.330522,4.29373494 C104.102929,4.42915663 104.897672,4.59951807 105.771447,4.78216867 C105.797464,4.80915663 105.849498,4.80915663 105.876251,4.80915663 C105.910122,4.80915663 105.939329,4.79686747 105.969273,4.79012048 C106.064014,4.77084337 106.147465,4.72843373 106.209807,4.66409639 C106.285403,4.58481928 106.333755,4.48168675 106.347746,4.37253012 L106.363699,4.29373494 L106.909072,1.82891566 L106.909072,1.67349398 C106.909072,1.33951807 106.67492,1.13493976 106.308966,1.03325301 C105.707632,0.878795181 103.014883,0.110120482 99.9554433,0.110120482 C96.2833793,0.110120482 93.3753775,1.28698795 92.450305,4.29373494 C92.4407328,4.32795181 92.4274789,4.35783133 92.4179066,4.38963855 C92.4051436,4.43180723 92.3904171,4.46963855 92.3783904,4.51301205 C92.2186074,5.10746988 92.1258301,5.76289157 92.1258301,6.50313253 C92.1258301,10.9674699 95.7335883,11.8154217 98.322024,12.2493976 C100.440438,12.6091566 102.1119,12.7142169 102.1119,14.4590361 C102.1119,16.0233735 100.857199,16.4349398 98.9233579,16.4349398 C96.753647,16.4349398 94.0869151,15.6884337 93.511598,15.560241 C93.381759,15.5354217 93.2762188,15.5096386 93.1711694,15.5096386 C92.9105096,15.5096386 92.7551445,15.6385542 92.7023744,15.9963855 L92.3116301,18.2546988 L92.3116301,18.3833735 C92.3116301,18.6662651 92.4667497,18.9231325 92.7799342,19.0248193 C93.1991498,19.179759 96.1790663,20 99.9166634,20 C103.967445,20 107.54845,18.5383133 107.54845,14.1248193 C107.54845,9.19638554 104.282348,8.50361446 101.30194,8.04096386"
                              id="Fill-3"
                              fill="#FFFFFF"
                              mask="url(#mask-2)"
                            />
                            <path
                              d="M64.0393633,15.8886747 L60.7204909,15.8886747 L60.7204909,4.57204819 L64.379301,4.57204819 C64.7489373,4.57204819 65.1413997,4.63686747 65.3095278,4.66795181 C67.414442,5.07277108 67.9870591,6.42120482 67.9870591,10.3609639 C67.9870591,15.0043373 67.2031161,15.8886747 64.0393633,15.8886747 M72.4597563,4.32120482 C72.4558293,4.31204819 72.4519022,4.30361446 72.446257,4.29373494 C71.2958684,1.80891566 68.9460027,0.406987952 64.5879271,0.406987952 L55.8833117,0.406987952 C55.6479324,0.406987952 55.4402881,0.585783133 55.4402881,0.817590361 L55.4402881,19.3084337 C55.4402881,19.5378313 55.6479324,19.7183133 55.8833117,19.7183133 L64.5879271,19.7183133 C71.7506732,19.7183133 73.3956283,15.7771084 73.3956283,9.87590361 C73.3956283,7.71566265 73.147486,5.86795181 72.4882277,4.38963855 C72.4793917,4.36843373 72.4705558,4.34385542 72.4597563,4.32120482"
                              id="Fill-4"
                              fill="#FFFFFF"
                              mask="url(#mask-2)"
                            />
                            <path
                              d="M13.2573268,0.411807229 L0.444741663,0.411807229 C0.184572699,0.411807229 0,0.564096386 0,0.797590361 L0,4.02650602 C0,4.17542169 0.0994041796,4.30915663 0.253296576,4.37253012 C0.31048466,4.3946988 0.375526901,4.41156627 0.444741663,4.42698795 L8.23631125,4.42698795 L8.23753846,4.43253012 L8.23753846,19.3322892 C8.23753846,19.5645783 8.42137483,19.7183133 8.68301645,19.7183133 L13.2573268,19.7183133 C13.5189684,19.7183133 13.7020685,19.5645783 13.7020685,19.3322892 L13.7020685,0.797590361 C13.7020685,0.564096386 13.5162686,0.411807229 13.2573268,0.411807229"
                              id="Fill-5"
                              fill="#FFFFFF"
                              mask="url(#mask-2)"
                            />
                          </g>
                          <path
                            d="M89.4347995,0.406506024 L76.2066803,0.406506024 C75.9465113,0.406506024 75.737149,0.585783133 75.737149,0.817349398 L75.737149,19.3084337 C75.737149,19.5378313 75.9465113,19.7183133 76.2066803,19.7183133 L89.4590983,19.7183133 C89.6964411,19.7183133 89.877823,19.5645783 89.877823,19.3322892 L89.877823,16.4585542 C89.877823,16.2286747 89.6964411,16.073253 89.4590983,16.073253 L81.0158791,16.073253 L81.0158791,12.0563855 L89.0411098,12.0563855 C89.302506,12.0563855 89.4846243,11.9014458 89.4846243,11.6715663 L89.4846243,8.60650602 C89.4846243,8.34963855 89.302506,8.24843373 89.0411098,8.24843373 L81.0158791,8.24843373 L81.0158791,4.42674699 L89.4347995,4.42674699 C89.5035233,4.42674699 89.5673384,4.41373494 89.6245265,4.39542169 C89.7791552,4.33783133 89.877823,4.21180723 89.877823,4.04216867 L89.877823,0.791807229 C89.877823,0.558795181 89.6964411,0.406506024 89.4347995,0.406506024"
                            id="Fill-7"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M126.796044,0.406506024 L122.379554,0.406506024 C122.115948,0.406506024 121.960092,0.558795181 121.960092,0.791807229 L121.960092,8.24843373 L115.377572,8.24843373 L115.377572,0.791807229 C115.377572,0.558795181 115.194227,0.406506024 114.932094,0.406506024 L110.515603,0.406506024 C110.254698,0.406506024 110.098106,0.558795181 110.098106,0.791807229 L110.098106,19.3322892 C110.098106,19.5645783 110.281451,19.7183133 110.54162,19.7183133 L114.959584,19.7183133 C115.220489,19.7183133 115.377572,19.5645783 115.377572,19.3322892 L115.377572,12.0563855 L121.934076,12.0563855 L121.934076,19.3322892 C121.934076,19.5645783 122.115948,19.7183133 122.379554,19.7183133 L126.796044,19.7183133 C127.05695,19.7183133 127.238823,19.5645783 127.238823,19.3322892 L127.238823,0.791807229 C127.238823,0.558795181 127.05695,0.406506024 126.796044,0.406506024"
                            id="Fill-8"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M169.350606,0.406506024 L156.540475,0.406506024 C156.280306,0.406506024 156.095733,0.558795181 156.095733,0.791807229 L156.095733,19.3322892 C156.095733,19.5645783 156.280306,19.7175904 156.538757,19.7175904 L161.114294,19.7175904 C161.375936,19.7175904 161.559772,19.5645783 161.559772,19.3322892 L161.559772,4.42674699 L169.350606,4.42674699 C169.417366,4.42674699 169.479708,4.41373494 169.534442,4.39542169 C169.694225,4.33325301 169.796574,4.1946988 169.796574,4.04216867 L169.796574,0.791807229 C169.796574,0.558795181 169.613474,0.406506024 169.350606,0.406506024"
                            id="Fill-9"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M153.150424,0.406506024 L140.550883,0.406506024 C140.290714,0.406506024 140.082088,0.585783133 140.082088,0.817349398 L140.082088,19.3084337 C140.082088,19.5378313 140.290714,19.7183133 140.550883,19.7183133 L144.891287,19.7183133 C145.151456,19.7183133 145.360818,19.5378313 145.360818,19.3084337 L145.360818,12.0306024 L151.918549,12.0306024 C152.179945,12.0306024 152.362063,11.8768675 152.362063,11.6457831 L152.362063,8.63156627 C152.362063,8.40192771 152.179945,8.24843373 151.918549,8.24843373 L145.360818,8.24843373 L145.360818,4.42674699 L153.150424,4.42674699 C153.217921,4.42674699 153.279036,4.41373494 153.333033,4.39542169 C153.49208,4.33325301 153.59443,4.1946988 153.59443,4.04216867 L153.59443,0.791807229 C153.59443,0.558795181 153.412557,0.406506024 153.150424,0.406506024"
                            id="Fill-10"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M135.85557,0.406506024 L131.437115,0.406506024 C131.17621,0.406506024 131.019863,0.558795181 131.019863,0.791807229 L131.019863,19.3322892 C131.019863,19.5645783 131.201736,19.7183133 131.464605,19.7183133 L135.881096,19.7183133 C136.143964,19.7183133 136.29982,19.5645783 136.29982,19.3322892 L136.29982,0.791807229 C136.29982,0.558795181 136.117211,0.406506024 135.85557,0.406506024"
                            id="Fill-11"
                            fill="#FFFFFF"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
            <Scrollbar className="components__navbar-scrollbar">
              <Nav
                selectedId={childComponentPath}
                onItemClick={this.handleItemClick}
                width={320}
                indent={20}
                className="components__navbar-menu"
              >
                {components.map(item => {
                  if (!item.components) {
                    return this.renderNavItem(item, 'outside')
                  }
                  return (
                    <SubNav
                      key={item.name}
                      title={item.cn}
                      defaultOpen={item.defaultOpen}
                      icon={`./svg/icons.svg#${item.icon}`}
                    >
                      {item.components.map(itemGroup => {
                        if (itemGroup.group) {
                          return this.renderNavItemGroup(itemGroup)
                        }
                        return this.renderNavItem(
                          itemGroup,
                          'inside',
                          item.path
                        )
                      })}
                    </SubNav>
                  )
                })}
              </Nav>
            </Scrollbar>
            {renderNavBottom()}
          </LayoutSidebar>
          <LayoutContent>
            {childComponentPath && this.renderTitle(childComponentPath)}
            <div className="components__content-wrapper">
              <div className="components__content">{children}</div>
            </div>
          </LayoutContent>
        </Layout>
      </div>
    )
  }
}

Components.propTypes = {
  children: PropTypes.node,
  '*': PropTypes.string
}

export default Components
