import React, { useState } from 'react'
import { AddressInterface, CreateAddressInterface } from '../../../interfaces/address'
import AddressForm from '../../../components/propertie/create/AddressForm'
import PropertieForm from '../../../components/propertie/create/PropertieForm'


const PropertieCreate = (props: { history: string[] }) => {
    const [isAddressCompleted, setIsAddressCompleted] = useState(false)
    const [address, setAdress] = useState<AddressInterface | undefined>(undefined)

    function submitAddress(address: CreateAddressInterface) {
        setAdress(address)

        setIsAddressCompleted(true)
    }

    return (
        <div className='container'>
            {
                !isAddressCompleted ? <AddressForm
                    handleSubmit={submitAddress}
                /> : <PropertieForm
                        address={address!}
                        history={props.history}
                    />
            }
        </div>
    )
}

export default PropertieCreate

