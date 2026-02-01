import { useEffect, useState } from "react";
import { getMessages } from "../../services/getMessages";
import MessageItem from "./MessageItem";

export default function Messages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages()
            .then(res => {
                setMessages(res);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    return (
        <section id="messages" className="tm-section-pad-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">

                        <h2 className="tm-text-primary text-center mb-5">
                            Съобщения
                        </h2>

                        {messages.map(x => {
                            return <MessageItem key={x.id} message={x} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
