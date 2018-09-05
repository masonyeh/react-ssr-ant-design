import React, {Children, Component, cloneElement} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import Header from '../components/Header'
// import Navbar from '../components/Navbar'
// import Main from '../components/Main'
import {IndexLink, Link} from 'react-router'
import actions from '../actions'
// import styles from '../sass/Common'
// import '../sass/global'
import 'antd/dist/antd.css';
// import {Layout,Menu,Icon} from 'antd'
// let {Header,Sider,Content,Footer} = Layout
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Common extends Component {
    constructor() {
        super()

        this.state = {
          collapsed: false,
        }
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }

    render() {
        // const {children, ...props} = this.props

        const {
          props:{
            children,...props
          },
          state:{
            collapsed
          }
        } = this

        let  element = ''
         Children.map(children,child=>{
          element = cloneElement(child, {...props})
        })

        // <div className={styles.app}>
        //     <Header/>
        //     <Navbar/>
        //     <Main>
        //         {element}
        //     </Main>
        // </div>
        return (
          <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
        )
    }
}
Common.propTypes = {
  children: React.PropTypes.element,
  props:React.PropTypes.object
};


function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Common)
