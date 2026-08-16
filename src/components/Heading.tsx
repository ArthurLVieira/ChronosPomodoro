import type React from "react";

type HeadingProps = {
    children: React.ReactNode,
    attribute: string,
    pessoa: Record<string, string>;
};

export default function Heading( { children, attribute, pessoa } : HeadingProps ) {
    return(
        <>
            <h1 className={attribute}>{children}</h1>
            {pessoa ? (<p>{`${pessoa.nome} ${pessoa.sobrenome} ${pessoa.idade}`}</p>) : (<p>atributo vazio</p>)}
        </>
    )
}