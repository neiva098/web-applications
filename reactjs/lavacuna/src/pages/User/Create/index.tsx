import React from "react";
import '../../../css/forms.css'
import { RouteComponentProps } from "react-router-dom";

import SelectedComponent from "./SelectedComponent";

const UserCreate = (props: RouteComponentProps) => {
    return (
        <div className='container'>
            <SelectedComponent
                history={props.history}
            />
        </div>

    );
};

export default UserCreate;
