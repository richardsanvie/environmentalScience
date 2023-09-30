import { useEffect, useState } from "react";

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setCarregando] = useState(true)

    // console.log("Antes", estaCarregando);

    useEffect(() => {
        setCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setCarregando(false)
                    setRepos(resJson);
                    console.log(resJson);

                }, 2000);
            })
    }, [nomeUsuario]);
    // console.log("Após", estaCarregando);


    return (
        <>
            {estaCarregando ? (
                <h1>Carregando...</h1>
                
            ):(
            <ul>
                {repos.map(({ id, name, language, html_url }) => (
                <li key={id}>
                    <b>Nome:</b> {name}<br />
                    <b>Linguagem:</b> {language}<br />
                    <a target="_blank" href={html_url}>Visitar</a><br />
                </li>
                ))}
            </ul>
            )}
        </>
    )
}

export default ReposList;