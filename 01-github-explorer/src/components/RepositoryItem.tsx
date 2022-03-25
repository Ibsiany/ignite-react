interface IProps {
    repository : {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem({repository}: IProps) {
    return (
        <li>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>

        <a href={repository.html_url}>
            Acesso rápido
        </a>
    </li>
    )
}