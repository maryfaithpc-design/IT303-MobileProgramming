document.addEventListener("DOMContentLoaded", function() {
    console.log("Content Loaded!");


    const form = document.querySelector('form');
    const dataContent = document.querySelector('.dataContent');
    const total = document.getElementById("total");
   
    let studentCount = 0;
    

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const program = document.getElementById("program").value;
        const year = document.getElementById("year").value;

        studentCount++;
        document.getElementById("total").textContext = studentCount;


        if (!name || !program || !year) {
            alert("Please fill in all fields.");
            return;
        }

        const studentDiv = document.createElement("div");
        studentDiv.classList.add("item");
        studentDiv.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Program:</strong> ${program}</p>
            <p><strong>Year:</strong> ${year}</p>
            <hr>
        `;
        
        dataContent.appendChild(studentDiv);

        studentCount++;
        document.getElementById("total").textContent = 'Total students: ${studentCount}';

        form.reset();
    });

});   