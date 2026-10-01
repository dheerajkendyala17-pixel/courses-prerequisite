const courseSelect =
    document.getElementById("courseSelect");

const completedCourses =
    document.getElementById("completedCourses");


// Add courses to dropdown

for (const course in courses) {

    const option = document.createElement("option");

    option.value = course;

    option.textContent =
        `${courses[course].code} - ${course}`;

    courseSelect.appendChild(option);
}


// Add completed course checkboxes

for (const course in courses) {

    const label = document.createElement("label");

    label.innerHTML = `
        <input
            type="checkbox"
            value="${course}"
        >
        ${courses[course].code} - ${course}
    `;

    completedCourses.appendChild(label);
}


// Eligibility algorithm

function checkEligibility() {

    const selectedCourse =
        courseSelect.value;

    const result =
        document.getElementById("result");

    if (!selectedCourse) {

        result.style.display = "block";

        result.className = "result failure";

        result.innerHTML =
            "Please select a target course.";

        return;
    }


    const completed =
        Array.from(
            document.querySelectorAll(
                '#completedCourses input:checked'
            )
        ).map(
            checkbox => checkbox.value
        );


    const prerequisites =
        courses[selectedCourse].prerequisites;


    const missing =
        prerequisites.filter(
            prerequisite =>
                !completed.includes(prerequisite)
        );


    result.style.display = "block";


    if (missing.length === 0) {

        result.className =
            "result success";

        result.innerHTML = `
            <h3>✓ Eligible</h3>

            <p>
                You have completed all prerequisites
                for <strong>${selectedCourse}</strong>.
            </p>
        `;

    }

    else {

        result.className =
            "result failure";

        result.innerHTML = `
            <h3>✗ Not Eligible</h3>

            <p>
                You still need to complete:
            </p>

            <strong>
                ${missing.join(", ")}
            </strong>
        `;
    }
}