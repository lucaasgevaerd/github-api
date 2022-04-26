type Props = {
    avatar_url: string;
    url: string;
    followers: string;
    location: string | null;
    name: string | null;
    login: string;
}

const ResultProfile = (props : Props) => {
    return (
        <div className="result-container">
            <div className="img-container">
                <img src={props.avatar_url} alt="" />
            </div>
            <div className="profile-information-container">
                <h3>Informações</h3>
                <div className="data-container">
                    <div className="outline">Perfil: <p className="text-field"><a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a></p></div>
                    <div className="outline">Seguidores:<div className="text-field">{props.followers}</div></div>
                    <div className="outline">Localidade:<div className="text-field">{props.location}</div></div>
                    <div className="outline">Nome:<div className="text-field">{props.name}</div></div>
                </div>
            </div>
        </div>
    );
}

export default ResultProfile;