import './TecnologyItem.css'

export default function TecnologyItem({name}) {
    const iconsPath = 'angular.svg'; 
    return (
        <div className='tecnology-item' >
            <img src={name+'.svg'} alt={name} />         
            <span>{name}</span>
        </div>
    )

}
