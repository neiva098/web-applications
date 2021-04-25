import React, { useEffect, useState } from "react";
import { FaMapSigns } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import '../../../css/forms.css'
import { AddressInterface } from "../../../interfaces/address";
import { findAddress } from "../../../services/api";

interface Props {
    submit: (user: AddressInterface) => void,
    goBack: () => void,
    address?: AddressInterface
}

const CreateAddressForm = (props: Props) => {
    const [codigo, setCodigo] = useState<string | undefined>(undefined);
    const [logradouro, setLogradouro] = useState(props.address?.logradouro || '');
    const [bairro, setBairro] = useState(props.address?.bairro || '');
    const [cep, setCep] = useState(props.address?.cep || '');
    const [estado, setEstado] = useState(props.address?.estado || '');
    const [cidade, setCidade] = useState(props.address?.cidade || '');

    useEffect(() => {
        async function completeAddress() {
            const address = await findAddress(cep)

            setCodigo(address?.codigo)
            setLogradouro(address?.logradouro || '')
            setEstado(address?.estado || '')
            setBairro(address?.bairro || '')
            setCidade(address?.cidade || '')
            setCodigo(address?.codigo)
        }
        if (cep.length === 8) {
            completeAddress()
        }
    }, [cep])

    return (
        <div className="form-content">
            <section className="form-description">
                <FaMapSigns size={150} className="icon"></FaMapSigns>
                <h1>Inclua o endereço</h1>
                <p>
                    Para incluir um novo endereço necessitamos das seguintes
                    informações.
                    </p>
                <button className="back-link" onClick={() => props.goBack()}>
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                </button>
            </section>

            <form
                onSubmit={async (e) => {
                    e.preventDefault()

                    props.submit({
                        codigo,
                        logradouro,
                        bairro,
                        cep,
                        estado,
                        cidade,
                    })
                }}
            >
                <input
                    placeholder="cep"
                    value={cep}
                    type="number"
                    minLength={8}
                    maxLength={8}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (event.target.value.length < 9) setCep(event.target.value)
                    }
                    }
                ></input>

                <input
                    placeholder="estado"
                    value={estado}
                    minLength={2}
                    maxLength={2}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEstado(event.target.value)
                    }
                ></input>

                <input
                    placeholder="cidade"
                    value={cidade}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setCidade(event.target.value)
                    }
                ></input>

                <input
                    placeholder="bairro"
                    value={bairro}
                    required={true}
                    minLength={3}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setBairro(event.target.value)
                    }
                ></input>

                <input
                    placeholder="logradouro"
                    value={logradouro}
                    required={true}
                    minLength={3}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setLogradouro(event.target.value)
                    }
                ></input>


                <button className="button" type="submit">
                    Salvar
            </button>
            </form>
        </div>
    );
};

export default CreateAddressForm;
