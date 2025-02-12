document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("madLibForm").addEventListener("submit", function (event) {
        event.preventDefault();

   
        let teacherName = document.getElementById("teacherName").value;
        let subject = document.getElementById("subject").value;
        let adjective = document.getElementById("adjective").value;
        let schoolItem = document.getElementById("schoolItem").value;
        let place = document.getElementById("place").value;

        let story = `Today in ${subject} class, our teacher ${teacherName} brought a ${adjective} ${schoolItem} to the ${place}. Everyone was so surprised!`;

        let storyOutput = document.getElementById("storyOutput");
        storyOutput.innerHTML = `<p>${story}</p>`;
    });
});
