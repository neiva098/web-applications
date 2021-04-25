import React from 'react'
import { PropertieInterface } from '../../../../interfaces/propertie'

interface OwnProps {
    propertie: PropertieInterface
    history: string[]
}

export default function DetailPropertie(props: OwnProps) {

    return (
        props.propertie ?
            <div className='detail-propertie-container'>
                <div className='detail-propertie-content'>
                    <div className='detail-propertie-data'>
                        <div className='detail-propertie-field'>
                            <strong>Estado:</strong>
                            <p>{props.propertie?.adress?.uf}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Bairro:</strong>
                            <p>{props.propertie?.adress?.bairro}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Cep:</strong>
                            <p>{props.propertie?.adress?.cep}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Logradouro:</strong>
                            <p>{props.propertie?.adress?.logradouro}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Numero:</strong>
                            <p>{props.propertie?.adress?.numero}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Complemento:</strong>
                            <p>{props.propertie?.adress?.complemento}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Tipo:</strong>
                            <p>{props.propertie?.type}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Quartos:</strong>
                            <p>{props.propertie?.roomsAmount}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Suites:</strong>
                            <p>{props.propertie?.suitesAmount}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Salas de jantar:</strong>
                            <p>{props.propertie?.diningRoomsAmount}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Salas de jantar:</strong>
                            <p>{props.propertie?.livingRoomsAmount}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Vagas:</strong>
                            <p>{props.propertie?.parkingAmount}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Armarios embutidos:</strong>
                            <p>{props.propertie?.builtInCabinetsAmount}</p>
                        </div>

                        <div className='detail-propertie-field'>
                            <strong>Descrição:</strong>
                            <p>{props.propertie?.description}</p>
                        </div>

                        {
                            props.propertie?.type === 'apartamento' &&
                            <div>
                                <div className='detail-propertie-field'>
                                    <strong>Andar:</strong>
                                    <p>{props.propertie?.floor}</p>
                                </div>
                                <div className='detail-propertie-field'>
                                    <strong>Valor do condominio:</strong>
                                    <p>{props.propertie?.condominiumValue}</p>
                                </div>
                                <div className='detail-propertie-field'>
                                    <strong>Porteiro 24 horas:</strong>
                                    <p>{props.propertie?.fullConcierge ? 'Sim' : 'Não'}</p>
                                </div>
                            </div>
                        }


                        <div className='detail-propertie-field'>
                            <strong>Aluguel:</strong>
                            <p>{`R$${props.propertie?.rentValue.toFixed(2)}`}</p>
                        </div>
                    </div>
                </div>
            </div>
            : <div />
    )
}
