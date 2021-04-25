import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Header from '../../../components/Header'
import HeaderListProperties from '../../../components/Header/ListProperties'
import PropertieLineComponent from '../../../components/propertie/list/line'
import { PropertieInterface } from '../../../interfaces/propertie'
import { listProperties } from '../../../services/api'
import { errorHandler } from '../../../utils/errors'

const ListPropertie = (props: { history: string[] }) => {
    const [identifier, setIdentifier] = useState('')
    const [properties, setProperties] = useState<PropertieInterface[]>([])

    useEffect(() => {
        async function loadProperties() {
            try {
                setProperties(await listProperties({}))
            } catch (e) {
                errorHandler(e)
            }
        }

        loadProperties()
    }, [])

    return (
        <div className='container'>
            <Header Component={HeaderListProperties} componentProps={{ history: props.history }} />
            <div className='square-container'>

                <div className='search-title-container'>
                    <h1>Imóveis Cadastrados:</h1>
                    <form onSubmit={async (e) => {
                        e.preventDefault()

                        setProperties(await listProperties({ bairro: identifier }))

                        setIdentifier('')
                    }}>
                        <input
                            placeholder='Digite o bairro'
                            minLength={2}
                            required={false}
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            className='search-propertie'
                        >

                        </input>
                        <button
                            type='submit'
                        >
                            <FaSearch size={22}></FaSearch>
                        </button>
                    </form>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Bairro</th>
                            <th>Quartos</th>
                            <th>Vagas</th>
                            <th>Descrição</th>
                            <th>Aluguel
                                                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            properties.map((propertie) => {
                                return (
                                    <PropertieLineComponent
                                        key={propertie.id}
                                        propertie={propertie}
                                        history={props.history}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListPropertie