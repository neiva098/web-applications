import React, { useState } from "react";
import { PropertieInterface } from "../../../../interfaces/propertie";
import { FaSave, FaTrash } from "react-icons/fa";
import { deletePropertie, updatePropertie } from "../../../../services/api";
import { Checkbox, FormControlLabel, FormGroup, withStyles } from "@material-ui/core";
import PropertieTypeCheckBox from "../../create/PropertieForm/PropertieTypeCheckBox";
import { errorHandler } from "../../../../utils/errors";

const checkBoxStyles = () => ({
  root: {
    "&$checked": {
      color: "#00AEED",
    },
  },
  checked: {},
});

const BlueCheckbox = withStyles(checkBoxStyles)(Checkbox);

interface OwnProps {
  propertie: PropertieInterface;
  history: string[];
}

export default function EditPropertie(props: OwnProps) {
  const [logradouro, setLogradouro] = useState(
    props.propertie?.adress?.logradouro
  );
  const [bairro, setBairro] = useState(props.propertie?.adress?.bairro);
  const [numero, setNumero] = useState(props.propertie?.adress?.numero);
  const [cep, setCep] = useState(props.propertie?.adress?.cep);
  const [uf, setUf] = useState(props.propertie?.adress?.uf);
  const [complemento, setComplemento] = useState<string | undefined>(
    props.propertie?.adress?.complemento
  );
  const [roomsAmount, setRoomsAmount] = useState(props.propertie?.roomsAmount);
  const [suitesAmount, setSuitesAmount] = useState(
    props.propertie?.suitesAmount
  );
  const [livingRoomsAmount, setLivingRoomsAmount] = useState(
    props.propertie?.livingRoomsAmount
  );
  const [diningRoomsAmount, setDiningRoomsAmount] = useState(
    props.propertie?.diningRoomsAmount
  );
  const [parkingAmount, setParkingAmount] = useState(
    props.propertie?.parkingAmount
  );
  const [builtInCabinetsAmount, setBuiltInCabinetsAmount] = useState(
    props.propertie?.builtInCabinetsAmount
  );
  const [rentValue, setRentValue] = useState(props.propertie?.rentValue);
  const [description, setDescription] = useState(props.propertie?.description);
  const [floor, setFloor] = useState(props.propertie?.floor || undefined);
  const [condominiumValue, setCondominiumValue] = useState(
    props.propertie?.condominiumValue || undefined
  );
  const [fullConcierge, setFullConcierge] = useState<boolean | undefined>(
    props.propertie.fullConcierge || undefined
  );

  const [type, setType] = useState<"casa" | "apartamento">(props.propertie.type);

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


  return props.propertie ? (
    <form className="detail-propertie-container" onSubmit={async (e) => {
      e.preventDefault()

      try {
        await updatePropertie(props.propertie.id!, {
          adress: { logradouro, bairro, numero, cep, uf, complemento },
          roomsAmount,
          suitesAmount,
          livingRoomsAmount,
          diningRoomsAmount,
          parkingAmount,
          builtInCabinetsAmount,
          rentValue,
          description,
          floor,
          condominiumValue,
          fullConcierge: fullConcierge || false,
        });
      } catch (e) {
        errorHandler(e)
      }

      props.history.push('/propertie/list')

    }}>
      <div className="detail-propertie-content">
        <div className="detail-propertie-data">
          <div className="edit-propertie-field">
            <strong>Estado:</strong>
            <input
              placeholder={props.propertie?.adress?.uf}
              value={uf}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUf(event.target.value)
              }
            ></input>
          </div>
          <div className="edit-propertie-field">
            <strong>Bairro:</strong>
            <input
              placeholder={props.propertie?.adress?.bairro}
              value={bairro}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setBairro(event.target.value)
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Cep:</strong>
            <input
              placeholder={props.propertie?.adress?.cep}
              value={cep}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCep(event.target.value)
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Logradouro:</strong>
            <input
              placeholder={props.propertie?.adress?.logradouro}
              value={logradouro}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setLogradouro(event.target.value)
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Numero:</strong>
            <input
              placeholder={props.propertie?.adress?.numero}
              value={numero}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setNumero(event.target.value)
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Complemento:</strong>
            <input
              placeholder={props.propertie?.adress?.complemento}
              value={complemento}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setComplemento(event.target.value)
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Quartos:</strong>
            <input
              placeholder={props.propertie?.roomsAmount.toString()}
              value={roomsAmount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setRoomsAmount(Number(event.target.value))
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Suites:</strong>
            <input
              placeholder={props.propertie?.suitesAmount.toString()}
              value={suitesAmount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSuitesAmount(Number(event.target.value))
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Salas de jantar:</strong>
            <input
              placeholder={props.propertie?.diningRoomsAmount.toString()}
              value={diningRoomsAmount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setDiningRoomsAmount(Number(event.target.value))
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Salas de jantar:</strong>
            <input
              placeholder={props.propertie?.livingRoomsAmount.toString()}
              value={livingRoomsAmount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setLivingRoomsAmount(Number(event.target.value))
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Vagas:</strong>
            <input
              placeholder={props.propertie?.parkingAmount.toString()}
              value={parkingAmount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setParkingAmount(Number(event.target.value))
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Armarios embutidos:</strong>
            <input
              placeholder={props.propertie?.builtInCabinetsAmount.toString()}
              value={builtInCabinetsAmount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setBuiltInCabinetsAmount(Number(event.target.value))
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Descrição:</strong>
            <input
              placeholder={props.propertie?.description}
              value={description}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setDescription(event.target.value)
              }
            ></input>
          </div>

          <div className="edit-propertie-field">
            <strong>Tipo de imóvel:</strong>
            <PropertieTypeCheckBox
              handleTypeChange={handleTypeChange}
              isRow={true}
              type={type}
            />
          </div>

          {type === "apartamento" && (
            <div>
              <div className="edit-propertie-field">
                <strong>Andar:</strong>
                <input
                  placeholder={props.propertie?.floor?.toString() || ''}
                  value={floor}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setFloor(Number(event.target.value))
                  }
                ></input>
              </div>
              <div className="edit-propertie-field">
                <strong>Valor do condominio:</strong>
                <input
                  placeholder={props.propertie?.condominiumValue?.toString() || ''}
                  value={condominiumValue}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setCondominiumValue(Number(event.target.value))
                  }
                ></input>
              </div>
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

          <div className="edit-propertie-field">
            <strong>Aluguel:</strong>
            <input
              placeholder={`R$${props.propertie?.rentValue.toFixed(2)}`}
              value={rentValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setRentValue(Number(event.target.value))
              }
            ></input>
          </div>
        </div>
      </div>
      <button className='visit-save' type='submit'>
        <FaSave size={20} color='#00AEED'></FaSave>
        <p>Salvar</p>
      </button>
      <button className='visit-delete' onClick={async () => {
        try {
          await deletePropertie(props.propertie.id!)

          props.history.push('/propertie/list')
        } catch (e) {
          errorHandler(e)
        }
      }}>
        <FaTrash size={20} color='#00AEED'></FaTrash>
        <p>Remover</p>
      </button>
    </form >
  ) : (
      <div />
    );
}
