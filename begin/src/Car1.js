import React, { Component } from 'react';
// Car1 là component, viết theo class component
// Component cũng là React Element

class Car1 extends Component {
    render() {
        let a = 200;
        return (
            <div>
                Car1 dc xây dựng từ class {a}
            </div>
        );
    }
}

export default Car1;