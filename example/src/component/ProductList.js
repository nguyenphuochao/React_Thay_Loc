// ["laptop","điện thoại","phụ kiện"]

// component con 

// Viết theo function
// const ProductList = (props) => {
//     return (
//         <div>
//             <h1>Danh sách</h1>
//             <ul>
//                 {
//                     props.list.map((el) => {
//                         return (
//                             <li>{el}</li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     );
// }
// export default ProductList;

// Viết theo class component
import React, { Component } from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2>Danh sách</h2>
                <ul>
                    {
                        this.props.list.map((el) => {
                            return (
                                <li>{el}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ProductList;