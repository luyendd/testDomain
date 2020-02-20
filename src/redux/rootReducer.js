import { combineReducers } from "redux";
import { ClassRoomsHomeByTeachers, ClassRoomsHomeByCenters } from "components/EduHome/redux";
import { CourseDetail } from "screens/CourseDetail/redux";
import { TeacherDetail } from "screens/TeacherDetail/redux";
import { AllLocation } from "components/Map/redux";
import { NewCenters } from "screens/Centers/redux";
import { NewTeachers } from "screens/Teachers/redux";
import { SpecialNewHome, ExperienceNewHome } from "components/Luggage/redux";
import { CenterDetail } from "screens/CenterDetail/redux";
import { SliderData } from "components/SliderComp/redux";
import { Authentication } from "./reducers/Authentication-reducer";
import { UserInfo } from "./reducers/UserInfo-reducer";
import { News, NewDetail } from "screens/News/redux";
import { BestClassRoomsByCenter, BestClassRoomsByTeacher } from "components/MostSelectedCourses/redux";
import { UserInformation } from "screens/UserInformation/redux";

export default combineReducers({
    Authentication,
    ClassRoomsHomeByTeachers,
    ClassRoomsHomeByCenters,
    CourseDetail,
    TeacherDetail,
    CenterDetail,
    AllLocation,
    NewCenters,
    NewTeachers,
    SpecialNewHome,
    ExperienceNewHome,
    SliderData,
    UserInfo,
    News,
    NewDetail,
    BestClassRoomsByCenter,
    BestClassRoomsByTeacher,
    UserInformation,
});