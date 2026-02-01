export default function MessageItem({message}) {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <strong>{message.name}</strong>
                    <small className="text-muted">{message.email}</small>
                </div>

                <p className="mb-0">
                    {message.message}
                </p>
            </div>
            <button
                className="btn btn-sm btn-outline-success"
            >
                Маркирай като прочетено
            </button>
        </div>
    );
}