import React from 'react';
import CourseItem from 'components/CourseItem/CourseItem';

const courses = [
    {
        id: 1,
        teacherImg: `${process.env.PUBLIC_URL}/assets/images/teacher.png`,
        teacherName: 'Trần Văn A',
        courseImg: `${process.env.PUBLIC_URL}/assets/images//edu-item.png`,
        title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
        salePrice: '9.000.000',
        price: '10.000.000',
        location: 'Định Công, Hoàng Mai, Hà Nội',
        emptySlot: '15',
        totalSlot: '30',
        openingDate: '',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
    },
    {
        id: 2,
        teacherImg: `${process.env.PUBLIC_URL}/assets/images/teacher.png`,
        teacherName: 'Trần Văn A',
        courseImg: `${process.env.PUBLIC_URL}/assets/images//edu-item.png`,
        title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
        salePrice: '9.000.000',
        price: '10.000.000',
        location: 'Định Công, Hoàng Mai, Hà Nội',
        emptySlot: '15',
        totalSlot: '30',
        openingDate: '',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
    },
    {
        id: 3,
        teacherImg: `${process.env.PUBLIC_URL}/assets/images/teacher.png`,
        teacherName: 'Trần Văn A',
        courseImg: `${process.env.PUBLIC_URL}/assets/images//edu-item.png`,
        title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
        salePrice: '9.000.000',
        price: '10.000.000',
        location: 'Định Công, Hoàng Mai, Hà Nội',
        emptySlot: '15',
        totalSlot: '30',
        openingDate: '',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
    },
    {
        id: 4,
        teacherImg: `${process.env.PUBLIC_URL}/assets/images/teacher.png`,
        teacherName: 'Trần Văn A',
        courseImg: `${process.env.PUBLIC_URL}/assets/images//edu-item.png`,
        title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
        salePrice: '9.000.000',
        price: '10.000.000',
        location: 'Định Công, Hoàng Mai, Hà Nội',
        emptySlot: '15',
        totalSlot: '30',
        openingDate: '',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
    },
    {
        id: 5,
        teacherImg: `${process.env.PUBLIC_URL}/assets/images/teacher.png`,
        teacherName: 'Trần Văn A',
        courseImg: `${process.env.PUBLIC_URL}/assets/images//edu-item.png`,
        title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
        salePrice: '9.000.000',
        price: '10.000.000',
        location: 'Định Công, Hoàng Mai, Hà Nội',
        emptySlot: '15',
        totalSlot: '30',
        openingDate: '',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
    },
    {
        id: 6,
        teacherImg: `${process.env.PUBLIC_URL}/assets/images/teacher.png`,
        teacherName: 'Trần Văn A',
        courseImg: `${process.env.PUBLIC_URL}/assets/images//edu-item.png`,
        title: 'Đây là tiêu để của khoá học. Đây là tiêu đề của khoá học.',
        salePrice: '9.000.000',
        price: '10.000.000',
        location: 'Định Công, Hoàng Mai, Hà Nội',
        emptySlot: '15',
        totalSlot: '30',
        openingDate: '',
        description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of…',
    },
];

class AccountCourses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="row">
                {courses.map((item, index) => {
                    return (
                        <CourseItem data={item} key={index} className={'col-4'} />
                    );
                })}
            </div>
        )
    }
}

export default AccountCourses;