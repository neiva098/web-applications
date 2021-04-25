import React, { FormEvent, useEffect, useState } from "react";
import '../../../css/forms.css'
import { Link, RouteComponentProps } from "react-router-dom";
import { FaMapSigns } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { createAddress, findAddress } from "../../../services/api";
import { errorHandler } from "../../../utils/errors";

const AddressForm = (props: RouteComponentProps) => {
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [codigo, setCodigo] = useState<string | undefined>(undefined);


    useEffect(() => {
        async function completeAddress() {
            const address = await findAddress(cep)

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

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            await createAddress({
                logradouro,
                bairro,
                cep,
                estado,
                cidade,
                codigo
            })

            props.history.push('/')
        } catch (e) {
            errorHandler(e)
        }
    }

    return (
        <div className='container'>
            <div className="form-content">
                <section className="form-description">
                    <FaMapSigns size={150} className="icon"></FaMapSigns>
                    <h1>Cadastre um novo endereço</h1>
                    <p>
                        Para incluir um novo endereço   necessitamos das seguintes
                        informações.
                    </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                    Voltar ao portal
                </Link>
                </section>

                <form
                    onSubmit={async (e) => await submit(e)}
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
        </div>

    );
};

export default AddressForm;
