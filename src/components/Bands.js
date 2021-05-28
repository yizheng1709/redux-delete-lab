import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {
    render() {
        return (
            <div>
                {this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} band={band}></Band>)}
            </div>
        )
    }
}
