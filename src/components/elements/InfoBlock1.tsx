interface InfoBlockProps {
    title:string;
    subText:string;
    value:string;
}

const InfoBlock =({title, subText, value}:InfoBlockProps)=>{
    return(
    <div className="p-4 border-gray-800 rounded-lg">
            <h2 className="text-lg font-normal mb-8">{title}</h2>
            <div>
                <span className="text-sm">{subText}</span>
                <p className="text-xl font-bold">{value}</p>
            </div>
            
    </div>)

}
export default InfoBlock