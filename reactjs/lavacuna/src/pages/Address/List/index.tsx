import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import HeaderList from '../../../components/Header/Lists'
import { AddressInterface } from '../../../interfaces/address'
import { getAddresses } from '../../../services/api'
import { errorHandler } from '../../../utils/errors'

const ListAddresses = (props: { history: string[] }) => {
    const [addresses, setAddresses] = useState<AddressInterface[]>([])

    useEffect(() => {
        async function loadAddresses() {
            try {
                setAddresses(await getAddresses())
            } catch (e) {
                errorHandler(e)
            }
        }

        loadAddresses()
    }, [])

    return (
        <div className='container'>
            <Header Component={HeaderList} componentProps={{ history: props.history }} />
            <div className='square-container'>

                <div className='search-title-container'>
                    <h1>Endereços Cadastrados:</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>CEP</th>
                            <th>Estado</th>
                            <th>Cidade</th>
                            <th>Bairro</th>
                            <th>Logradouro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addresses.map(address => {
                                return (
                                    <tr key={address.codigo}>
                                        <th className='propertie-column'>{address.cep}</th>
                                        <th className='propertie-column'>{address.estado}</th>
                                        <th className='propertie-column'>{address.cidade}</th>
                                        <th className='propertie-column'>{address.bairro}</th>
                                        <th className='propertie-column'>{address.logradouro}</th>
                                    </tr >
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListAddresses