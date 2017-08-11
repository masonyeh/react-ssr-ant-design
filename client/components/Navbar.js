import React, {Component} from 'react'
import {IndexLink, Link} from 'react-router'
// import styles from '../sass/Navbar'
import styles from '../sass/Common'
import {Layout,Menu,Icon} from 'antd'
let {Sider} = Layout

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        const {collapsed} = this.props

        return (
          <Sider style={{ overflow: 'auto', height: '100vh', left: 0 }}
                  trigger={null}
                  collapsible
                  collapsed={collapsed}
          >
            <div className={styles.logo} >
            中台
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
              <IndexLink className={styles.link} activeClassName={styles.active} to="/">
                <Icon type="user" />
                <span className="nav-text">首页</span>
                </IndexLink>
              </Menu.Item>
              <Menu.Item key="2">
              <Link  to="/explore">
                <Icon type="video-camera" />
                <span className="nav-text">explore</span>
              </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link  to="/about">
                  <Icon type="upload" />
                  <span className="nav-text">about</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
        )
    }
}

export default Navbar
