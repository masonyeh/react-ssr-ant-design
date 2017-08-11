import React, {Component} from 'react'
import styles from '../sass/Main'

class Main extends Component {
    constructor() {
        super()
    }

    render() {
        const {children} = this.props

        return (
            <main className={styles.main}>
                {children}
            </main>
        )
    }
}

Main.propTypes = {children: React.PropTypes.element}

export default Main
