function saveMemory() {
    const memory = document.getElementById("memory").value;
    if (memory) {
        const savedMemories = document.getElementById("saved-memories");
        const memoryDiv = document.createElement("div");
        memoryDiv.className = "memory";
        memoryDiv.textContent = memory;
        savedMemories.appendChild(memoryDiv);
        document.getElementById("memory").value = "";
    } else {
        alert("Please write a memory first!");
    }
}
