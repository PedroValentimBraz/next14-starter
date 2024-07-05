import Link from "next/link"

const Links = () => {
    const links = [
        {
            title: 'página inicial',
            path: '/',
        },
        {
            title: 'Blog',
            path:  '/blog',
        },
        {
            title: 'Contato',
            path: '/contato',
        },
        {
            title: 'Sobre',
            path: '/sobre',
        },
    ]

    return(
        <div>
            {links.map((link=>(
               <Link href={link.path}key={link.title}>{link.title}</Link> 
            )))}
        </div>
    )
}

export default Links