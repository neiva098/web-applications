import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { RiHomeHeartLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";


import CheckBoxs from './PropertieTypeCheckBox'
import { createPropertie } from '../../../../services/api'
import { errorHandler } from '../../../../utils/errors'

import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { FormControlLabel, FormGroup } from "@material-ui/core";
import { CreateAddressInterface } from "../../../../interfaces/address";

const checkBoxStyles = () => ({
    root: {
        "&$checked": {
            color: "#00AEED",
        },
    },
    checked: {},
});

const BlueCheckbox = withStyles(checkBoxStyles)(Checkbox);

const PropertieForm = (props: {
    history: string[];
    address: CreateAddressInterface;
}) => {
    const [roomsAmount, setRoomsAmount] = useState<number>(undefined!);
    const [suitesAmount, setSuitesAmount] = useState<number>(undefined!);
    const [livingRoomsAmount, setLivingRoomsAmount] = useState<number>(
        undefined!
    );
    const [diningRoomsAmount, setDiningRoomsAmount] = useState<number>(
        undefined!
    );
    const [parkingAmount, setParkingAmount] = useState<number>(undefined!);
    const [builtInCabinetsAmount, setBuiltInCabinetsAmount] = useState<number>(
        undefined!
    );
    const [rentValue, setRentValue] = useState<number>(undefined!);

    const [description, setDescription] = useState("");
    const [type, setType] = useState<"casa" | "apartamento">("casa");

    const [floor, setFloor] = useState<number | undefined>(undefined);
    const [condominiumValue, setCondominiumValue] = useState<number | undefined>(
        undefined
    );
    const [fullConcierge, setFullConcierge] = useState<boolean | undefined>(
        undefined
    );

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            await createPropertie({
                roomsAmount,
                suitesAmount,
                livingRoomsAmount,
                diningRoomsAmount,
                parkingAmount,
                builtInCabinetsAmount,
                rentValue,
                description,
                floor,
                type,
                condominiumValue,
                fullConcierge: fullConcierge || false,
                adress: props.address,
            });

            props.history.push("/propertie/list");
        } catch (e) {
            errorHandler(e);
        }
    }

    function handleTypeChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.name === "apartamento") {
            if (event.target.checked) return setType("apartamento");

            return setType("casa");
        }

        if (event.target.name === "casa") {
            if (event.target.checked) return setType("casa");

            return setType("apartamento");
        }
    }

    return (
        <div className="form-content">
            <section className="form-description">
                <RiHomeHeartLine size={150} className="icon"></RiHomeHeartLine>
                <h1>Cadastre um novo imóvel</h1>
                <p>
                    Para incluir um novo imóvel em sua conta necessitamos das seguintes
                    informações.
        </p>
                <Link className="back-link" to="/home">
                    <FiArrowLeft size={16} color="#E02041" />
          Voltar ao portal de imóveis
        </Link>
            </section>

            <form onSubmit={async (e) => await handleSubmit(e)}>
                <input
                    placeholder="numero de quartos"
                    value={roomsAmount}
                    type="number"
                    min={1}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRoomsAmount(Number(event.target.value))
                    }
                ></input>
                <input
                    placeholder="numero de suites"
                    value={suitesAmount}
                    type="number"
                    min={0}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setSuitesAmount(Number(event.target.value))
                    }
                ></input>

                <input
                    placeholder="numero de salas de estar"
                    value={livingRoomsAmount}
                    type="number"
                    min={0}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setLivingRoomsAmount(Number(event.target.value))
                    }
                ></input>

                <input
                    placeholder="numero de salas de jantar"
                    value={diningRoomsAmount}
                    type="number"
                    min={0}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setDiningRoomsAmount(Number(event.target.value))
                    }
                ></input>

                <input
                    placeholder="numero de vagas"
                    value={parkingAmount}
                    type="number"
                    min={0}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setParkingAmount(Number(event.target.value))
                    }
                ></input>

                <input
                    placeholder="numero de armários embutidos"
                    value={builtInCabinetsAmount}
                    type="number"
                    min={0}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setBuiltInCabinetsAmount(Number(event.target.value))
                    }
                ></input>

                <input
                    placeholder="valor do aluguel"
                    value={rentValue}
                    type="number"
                    min={0}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRentValue(Number(event.target.value))
                    }
                ></input>

                <input
                    placeholder="descrição"
                    value={description}
                    required={false}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setDescription(event.target.value)
                    }
                ></input>

                <h2>Tipo de imóvel:</h2>
                <CheckBoxs
                    handleTypeChange={handleTypeChange}
                    isRow={true}
                    type={type}
                />

                {type === "apartamento" && (
                    <div>
                        <input
                            placeholder="andar"
                            value={floor}
                            type="number"
                            min={1}
                            required={true}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setFloor(Number(event.target.value))
                            }
                        ></input>

                        <input
                            placeholder="valor do condomínio"
                            value={condominiumValue}
                            type="number"
                            min={0}
                            required={true}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setCondominiumValue(Number(event.target.value))
                            }
                        ></input>

                        <FormGroup row={true}>
                            <FormControlLabel
                                className="checkBox-item"
                                control={
                                    <BlueCheckbox
                                        checked={fullConcierge}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                            setFullConcierge(!(fullConcierge || false))
                                        }
                                        name="fullConcierge"
                                    />
                                }
                                label={<label>Porteiro 24 horas</label>}
                            />
                        </FormGroup>
                    </div>
                )}

                <button className="button" type="submit">
                    Cadastrar
        </button>
            </form>
        </div>
    );
};

export default PropertieForm;
