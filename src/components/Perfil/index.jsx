const Perfil = ({nomeUsuario}) => {
    return (
        <>
            <h1>{nomeUsuario}</h1>
            <img src={`https://github.com/${nomeUsuario}.png`} alt="" />
        </>
    )
}

export default Perfil