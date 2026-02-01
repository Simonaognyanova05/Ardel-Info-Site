import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase";


export default function MessageItem({ message }) {

    const handleDelete = async (id) => {
        const confirm = window.confirm("Сигурни ли сте, че съобщението е прочетено?");
        if (!confirm) return;

        try {
            await deleteDoc(doc(db, "messages", id));
        } catch (err) {
            console.error("Грешка при изтриване:", err);
        }
    };
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
                onClick={() => handleDelete(message.id)}
            >
                Маркирай като прочетено
            </button>
        </div>
    );
}