export const VerificationsPreview = ({ver})=>{
    return (
        <div  className="verifications-preview flex column align-center">
            <div className="ver-icon">

            <img className="" src={ver.img} alt=''/>
            </div>
            <h1 className="ver-title">{ver.title}</h1>
        </div>
    )
}