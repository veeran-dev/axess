interface InfoBlockProps {
    title:string;
    value:string;
}

const InfoBlock =({title, value}:InfoBlockProps)=>{
    return(
        <div className="w-full sm:w-1/4 md:w-1/6 p-4 shadow rounded-md bg-white">
            <h2 className="text-sm font-normal mb-2">{title}</h2>
            <p className="text-2xl font-bold">{value}</p>
            
    </div>)

}
export default InfoBlock