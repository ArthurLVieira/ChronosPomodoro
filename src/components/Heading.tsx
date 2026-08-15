export default function Heading({ attribute, pessoa, children }) {
    return(
        <>
            <h1 className={attribute}>{children}</h1>
            {pessoa ? (<p>{`${pessoa.nome} ${pessoa.sobrenome}`}</p>) : (<p>atributo vazio</p>)}
        </>
    )
}