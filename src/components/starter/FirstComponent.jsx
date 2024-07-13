import { Component } from 'react';

export default function FirstComponent() {
    return (
        <div className='FirstComponent'>First Component</div>
    )
}

export class FifthComponent extends Component {
    render() {
        return (
            <div className='FifthComponent'>Fifth Component</div>
        )
    }
}