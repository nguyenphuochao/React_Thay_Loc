import React, { Component } from 'react';
import StudentList from '../../components/Student/StudentList';
import Search from '../../components/Search';

class StudentHomePage extends Component {
    render() {
        return (
            <>
                <h1>Danh sách sinh viên</h1>
                <a href="add.html" className="btn btn-info">Add</a>
                <Search />
                <StudentList />
            </>
        );
    }
}

export default StudentHomePage;