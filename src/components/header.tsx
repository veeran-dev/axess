export default function Header ({title, href}:{title:string; href?:string}){
    return(
        <div className="flex py-4">
            <h2 className="text-xl/7 font-semibold text-gray-900">{title}</h2>
            {href &&
                <a className="ml-auto text-sm/6 font-semibold text-gray-600 hover:text-gray-500" href={href}>View all</a>
            }
        </div>
        
    )
}