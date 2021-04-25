import React from "react";
import './style.css'
import Header from "../../components/Header";
import HeaderHomeProperties from "../../components/Header/Home";

import logo_menino from '../../assets/pediatraMenino.jpg'
import logo_menina from '../../assets/pediatraMenina.jpg'
import logo_idoso from '../../assets/idoso.jpg'
import logo_emergencia from '../../assets/emergencia.jpg'
import Slide from "../../components/slide";


const Home = (props: { history: string[] }) => {
    return (
        <div
        >
            <Header
                Component={HeaderHomeProperties}
                componentProps={{ history: props.history }}
            />

            <div className='container'>
                <Slide

                />

                <div className='aritana-container'>
                    <h1>A Clínica:</h1>
                    <ul>
                        <li>
                            <h2>Quem Somos</h2>
                            <img src={logo_menino} alt='logo_menino'></img>
                            <div className="text">
                                <br></br>
                                <p className='text-description'>
                                    La Vacuna foi fundada em 1905 em Vitória-ES por padres espanhóis
                                    que desejavam implantar um serviço de vacinação em massa contra a pandemia
                                    da varióla, com apoio de Oswaldo Cruz, um médico epidemologista
                                    brasileiro que comandou a aplicação de vacinas neste período.
                                </p>
                                <br></br>
                                <p className='text-description'>
                                    Hoje a clínica é multiespecializada e provê serviços médicos considerados excelentes
                                    pela organização mundial da saúde e a um valor acessível.
                                 </p>

                            </div>
                        </li>

                        <li>
                            <h2>Missão</h2>
                            <img src={logo_menina} alt='logo_menina'></img>
                            <div className="text">
                                <br></br>
                                <p className='text-description'>
                                    Oferecer aos pacientes e familiares
                                    a gestão de saúde e bem estar com excelência,
                                    humanidade e sustentabilidade.
                            </p>
                            </div>
                        </li>

                        <li>
                            <h2>Valores</h2>
                            <img src={logo_idoso} alt='logo_idoso'></img>
                            <div className="text">
                                <br></br>
                                <p className='text-description'>

                                    Compromisso com a sociedade,
                                    com a perenidade da instituição e
                                    com o meio ambiente.
                                </p>
                            </div>
                        </li>

                        <li>
                            <h2>Contato</h2>
                            <img src={logo_emergencia} alt='logo_emergencia'></img>
                            <div className="text">
                                <br></br>
                                <p className='text-description'>
                                    Nosso atendimento é 24 horas por dia
                                    em todos os dias da semana.
                            </p>
                                <br></br>
                                <br></br>
                                <p className='text-description'>
                                    Telefone:(31) 3339-90004
                            </p>

                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Home;
