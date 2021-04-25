import React from "react";
import '../../../css/forms.css'
import { RouteComponentProps } from "react-router-dom";
import AppoitamentCreateForm from "../../../components/Appointament/CreateForm";
import { CreateAppointmentInterface } from "../../../interfaces/appointament";
import { createAppointament } from "../../../services/api";
import { errorHandler } from "../../../utils/errors";

const AppointamentCreate = (props: RouteComponentProps) => {
    async function submit(appointament: CreateAppointmentInterface) {
        try {
            await createAppointament(appointament)

            props.history.push('/')
        } catch (e) {
            errorHandler(e)
        }
    }

    return (
        <div className='container'>
            <AppoitamentCreateForm
                submit={submit}
                goBack={() => { props.history.push('/') }}
            />
        </div>

    );
};

export default AppointamentCreate;
