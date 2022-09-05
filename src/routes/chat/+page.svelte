<script>
    import { io } from "socket.io-client";
    const socket = io();

    let user, username, msgDraft, messages = [];

    function login() {
        user = username;
    }

    function sendMessage() {
        socket.emit("message", {text: msgDraft, user});
        msgDraft = "";
    }

    socket.on("message", (message) => {
        // Listen to the message event
        messages = [...messages, message];
    });
</script>

<main>
    {#if user}
        <ul>
            {#each messages as msg}
                <li><div>{msg.user} at {msg.time}</div><div>{msg.text}</div></li>
            {/each}
        </ul>
        <form on:submit|preventDefault={sendMessage}>
            <input autofocus bind:value={msgDraft} type="text" /><button type="submit"
                >Send</button
            >
        </form>
    {:else}
        <form on:submit|preventDefault={login}>
            <input bind:value={username} type="text" /><button type="submit"
                >Login</button
            >
        </form>
    {/if}
</main>
