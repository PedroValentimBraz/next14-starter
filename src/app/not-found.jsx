import Link from "next/link";

const NotFound = () => {
    return(
        <div>
            <h2>Página não encontrada</h2>
            <p>Desculpe, não encontramos a página</p>
            <Link href={"/"}>Retornar ao home</Link>
        </div>
    )
};
  
  export default NotFound;