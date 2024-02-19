"use client";
export default function Contact() {
    const validateName = (e) => {
        let tmp = e.target.value;
        if (tmp.length > 20 || !tmp) {
            document
                .getElementById("nameinput")
                .classList.remove("border-zinc-400");
            document
                .getElementById("nameinput")
                .classList.remove("border-green-400");

            document
                .getElementById("nameinput")
                .classList.add("border-red-400");
        } else {
            console.log("dd");
            document
                .getElementById("nameinput")
                .classList.remove("border-red-400");
            document
                .getElementById("nameinput")
                .classList.remove("border-zinc-400");
            document
                .getElementById("nameinput")
                .classList.add("border-green-400");
        }
    };
    const validateMessage = (e) => {
        let tmp = e.target.value;
        if (tmp.length > 200 || !tmp) {
            document
                .getElementById("message")
                .classList.remove("border-zinc-400");
            document
                .getElementById("message")
                .classList.remove("border-green-400");

            document.getElementById("message").classList.add("border-red-400");
        } else {
            console.log("dd");
            document
                .getElementById("message")
                .classList.remove("border-red-400");
            document
                .getElementById("message")
                .classList.remove("border-zinc-400");
            document
                .getElementById("message")
                .classList.add("border-green-400");
        }
    };
    const validateEmail = (e) => {
        let tmp = e.target.value;
        let emailValidator = String(tmp)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        if (tmp.length > 20 || !emailValidator || !tmp) {
            document
                .getElementById("emailInput")
                .classList.remove("border-zinc-400");
            document
                .getElementById("emailInput")
                .classList.remove("border-green-400");

            document
                .getElementById("emailInput")
                .classList.add("border-red-400");
        } else {
            document
                .getElementById("emailInput")
                .classList.remove("border-red-400");
            document
                .getElementById("emailInput")
                .classList.remove("border-zinc-400");

            document
                .getElementById("emailInput")
                .classList.add("border-green-400");
        }
    };
    return (
        <div className="flex flex-col justify-between items-center p-3">
            <div className="flex flex-col w-full max-w-4xl bg-gradient-to-br from-zinc-800 to-slate-400 p-10 rounded-xl text-white items-center gap-5">
                <h4 className="text-lg font-extrabold">
                    Fill The Contact Form
                </h4>
                <div className="flex md:flex-row flex-col gap-2 md:items-center md:justify-around w-full">
                    <span className="font-bold">Name:</span>
                    <input
                        id="nameinput"
                        className="border-2 border-zinc-400 rounded-lg bg-transparent font-bold focus:outline-none focus:border-white transition-all text-center placeholder-white p-1 md:w-4/5 w-full"
                        type="text"
                        placeholder="Your Name"
                        onChange={validateName}
                    />
                </div>
                <div className="flex md:flex-row flex-col gap-2 md:items-center md:justify-around w-full">
                    <span className="font-bold">Email:</span>
                    <input
                        className="border-2 border-zinc-400 rounded-lg bg-transparent font-bold focus:outline-none focus:border-white transition-all text-center placeholder-white p-1 md:w-4/5 w-full"
                        type="text"
                        placeholder="Email@email.com"
                        id="emailInput"
                        onChange={validateEmail}
                    />
                </div>
                <div className="flex md:flex-row flex-col gap-2 md:items-center md:justify-around w-full">
                    <span className="font-bold">Message:</span>
                    <textarea
                        rows={4}
                        className="border-2 border-zinc-400 rounded-lg bg-transparent font-bold focus:outline-none focus:border-white transition-all text-center placeholder-white p-1 md:w-4/5 w-full"
                        type="text"
                        placeholder="message"
                        id="message"
                        onChange={validateMessage}
                    ></textarea>
                </div>
                <button className="bg-zinc-400 p-2 rounded-xl transition-all hover:bg-zinc-300 self-end mx-4">
                    Submit
                </button>
            </div>
        </div>
    );
}
