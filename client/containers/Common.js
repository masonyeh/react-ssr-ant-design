import React, {Children, Component, cloneElement} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import Header from '../components/Header'
import Navbar from '../components/Navbar'
// import Main from '../components/Main'
import {IndexLink, Link} from 'react-router'
import actions from '../actions'
import styles from '../sass/Common'
import '../sass/global'
// import 'antd/dist/antd.css';
import {Layout,Menu,Icon} from 'antd'
let {Header,Sider,Content,Footer} = Layout

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
          <Layout>
            <Navbar  collapsed={collapsed}/>
          <Layout>
               <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
                  <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                  {element}
                 </Content>
                 <Footer style={{ textAlign: 'center' }}>
                   中台 ©2017 医时
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
