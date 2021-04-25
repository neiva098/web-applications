import React, { useState } from "react";
import './style.css'
import CreateAddressForm from "../../../components/Address/CreateForm";
import UserCreateForm from "../../../components/User/CreateForm";
import EmployeeCreateForm from "../../../components/User/Employee/CreateForm";
import MedicCreateForm from "../../../components/User/Employee/Medic/CreateForm";
import PatientCreateForm from "../../../components/User/Patient/CreateForm";
import { AddressInterface } from "../../../interfaces/address";
import { CreateUserInterface, EmployeeInterface, MedicInterface, PatientInterface } from "../../../interfaces/user";
import { FaUser } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { RouteComponentProps } from "react-router-dom";
import { createUser } from "../../../services/api";
import { errorHandler } from "../../../utils/errors";

function SelectedComponent(props: { history: RouteComponentProps['history'] }) {
    async function submit() {
        try {
            await createUser({
                ...user!,
                endereco: address,
                employeeProfile: employee && {
                    ...employee,
                    medicProfile: medic,
                },
                patientProfile: patient
            })

            props.history.push('/user/home')
        } catch (e) {
            errorHandler(e)
        }
    }

    const [address, setAddress] = useState<AddressInterface | undefined>(undefined)
    const [user, setUser] = useState<CreateUserInterface | undefined>(undefined)
    const [employee, setEmployee] = useState<EmployeeInterface | undefined>(undefined)
    const [medic, setMedic] = useState<MedicInterface | undefined>(undefined)
    const [patient, setPatient] = useState<PatientInterface | undefined>(undefined)
    const [activeForm, setActiveForm] = useState<'address' | 'user' | 'patient' | 'employee' | 'medic' | undefined>(undefined)

    switch (activeForm) {
        case 'address':
            return (
                <CreateAddressForm
                    submit={(address: AddressInterface) => {
                        setAddress(address)

                        setActiveForm(undefined)
                    }
                    }
                    goBack={() => {
                        setActiveForm(undefined)
                    }}
                    address={address}
                />
            );
        case 'user':
            return (
                <UserCreateForm
                    submit={(user: CreateUserInterface) => {
                        setUser(user)

                        setActiveForm(undefined)
                    }
                    }
                    goBack={() => {
                        setActiveForm(undefined)
                    }}
                    user={user}
                />
            );
        case 'employee':
            return (
                <EmployeeCreateForm
                    submit={(user: EmployeeInterface) => {
                        setEmployee(user)

                        setActiveForm(undefined)
                    }
                    }
                    goBack={() => {
                        setActiveForm(undefined)
                    }}
                    employee={employee}
                />
            );
        case 'patient':
            return (
                <PatientCreateForm
                    submit={(patient: PatientInterface) => {
                        setPatient(patient)

                        setActiveForm(undefined)
                    }
                    }
                    goBack={() => {
                        setActiveForm(undefined)
                    }}
                    patient={patient}
                />
            );
        case 'medic':
            return (
                <MedicCreateForm
                    submit={(medic: MedicInterface) => {
                        setMedic(medic)

                        setActiveForm(undefined)
                    }
                    }
                    goBack={() => {
                        setActiveForm(undefined)
                    }}
                    medic={medic}
                />
            );
        default:
            return (
                <div className="form-content">
                    <section className="form-description">
                        <FaUser size={150} className="icon"></FaUser>
                        <h1>Cadastro de usuário</h1>
                        <p>
                            Para incluir um usuário adicione as informações pessoais, endereço
                            e o perfil do usuário.
                    </p>
                        <button className="back-link" onClick={() => props.history.push('/user/home')}>
                            <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                </button>
                    </section>

                    <div className='selected-createuser-component'>
                        <button className="button"
                            style={{ backgroundColor: address ? 'rgb(111, 204, 111)' : 'rgb(209, 81, 30)', }}
                            onClick={() => setActiveForm('address')}
                        >
                            Endereço
                    </button>

                        <button className="button"
                            style={{ backgroundColor: user ? 'rgb(111, 204, 111)' : 'rgb(209, 81, 30)' }}
                            onClick={() => setActiveForm('user')}
                        >
                            Dados pessoais
                    </button>

                        {
                            user &&
                            <button className="button"
                                style={{ backgroundColor: employee ? 'rgb(111, 204, 111)' : 'rgb(209, 81, 30)' }}
                                onClick={() => setActiveForm('employee')}
                            >
                                Colaborador
                        </button>
                        }

                        {
                            employee &&
                            <button className="button"
                                style={{ backgroundColor: medic ? 'rgb(111, 204, 111)' : 'rgb(209, 81, 30)' }}
                                onClick={() => setActiveForm('medic')}
                            >
                                Médico
                        </button>
                        }

                        {
                            user &&
                            <button className="button"
                                style={{ backgroundColor: patient ? 'rgb(111, 204, 111)' : 'rgb(209, 81, 30)' }}
                                onClick={() => setActiveForm('patient')}
                            >
                                Paciente
                        </button>
                        }

                        {
                            user && address && (employee || patient) &&
                            <button className="button" onClick={async () => {
                                await submit()
                            }}>
                                Cadastrar
                        </button>
                        }
                    </div>
                </div>

            );
    }
}

export default SelectedComponent