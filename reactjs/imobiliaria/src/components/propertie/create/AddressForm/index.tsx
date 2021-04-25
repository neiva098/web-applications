import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapSigns } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

const AddressForm = (props: { handleSubmit: Function }) => {
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");
  const [complemento, setComplemento] = useState<string | undefined>(undefined);

  return (
    <div className="form-content">
      <section className="form-description">
        <FaMapSigns size={150} className="icon"></FaMapSigns>
        <h1>Primeiramente cadastre um novo endereço do imóvel</h1>
        <p>
          Para incluir um novo endereço em sua conta necessitamos das seguintes
          informações.
        </p>
        <Link className="back-link" to="/home">
          <FiArrowLeft size={16} color="#E02041" />
          Voltar ao portal de imóveis
        </Link>
      </section>

      <form
        onSubmit={async (e) =>
          props.handleSubmit({
            logradouro,
            bairro,
            numero,
            cep,
            uf,
            complemento,
          })
        }
      >
        <input
          placeholder="logradouro"
          value={logradouro}
          required={true}
          minLength={3}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLogradouro(event.target.value)
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
          placeholder="numero"
          value={numero}
          type="number"
          min={1}
          required={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setNumero(event.target.value)
          }
        ></input>

        <input
          placeholder="cep"
          value={cep}
          type="number"
          minLength={8}
          maxLength={8}
          required={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCep(event.target.value)
          }
        ></input>

        <input
          placeholder="uf"
          value={uf}
          minLength={2}
          maxLength={2}
          required={true}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUf(event.target.value)
          }
        ></input>

        <input
          placeholder="complemento"
          value={complemento}
          required={false}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setComplemento(event.target.value)
          }
        ></input>

        <button className="button" type="submit">
          Seguinte
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
