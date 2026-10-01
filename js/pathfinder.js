// Get HTML elements
const targetCourse = document.getElementById("targetCourse");
const completedCourses = document.getElementById("completedCourses");
const pathResult = document.getElementById("pathResult");


// --------------------------------------------------
// 1. Add all courses to Target Course dropdown
// --------------------------------------------------

for (const course in courses) {

    const option = document.createElement("option");

    option.value = course;

    option.textContent =
        `${courses[course].code} - ${course}`;

    targetCourse.appendChild(option);
}


// --------------------------------------------------
// 2. Create checkboxes for completed courses
// --------------------------------------------------

for (const course in courses) {

    const label = document.createElement("label");

    label.innerHTML = `
        <input type="checkbox" value="${course}">
        ${courses[course].code} - ${course}
    `;

    completedCourses.appendChild(label);
}


// --------------------------------------------------
// 3. DFS to find ALL prerequisites
// --------------------------------------------------

function getAllPrerequisites(course, visited = new Set()) {

    // Stop if already visited
    if (visited.has(course)) {
        return;
    }

    // Mark course as visited
    visited.add(course);

    // Get prerequisites
    const prerequisites =
        courses[course].prerequisites;

    // Visit every prerequisite
    for (const prerequisite of prerequisites) {

        getAllPrerequisites(
            prerequisite,
            visited
        );
    }

    return visited;
}


// --------------------------------------------------
// 4. Check prerequisite eligibility
// --------------------------------------------------

function checkPrerequisites() {

    const selectedCourse =
        targetCourse.value;

    // Check whether course was selected
    if (!selectedCourse) {

        pathResult.innerHTML = `
            <div class="error-message">
                Please select a course first.
            </div>
        `;

        return;
    }


    // Get courses completed by student
    const completed = new Set(

        Array.from(
            completedCourses.querySelectorAll(
                "input:checked"
            )
        ).map(
            checkbox => checkbox.value
        )

    );


    // Find all prerequisite courses
    const allPrerequisites =
        getAllPrerequisites(selectedCourse);


    // Remove the selected course itself
    allPrerequisites.delete(selectedCourse);


    // Find missing prerequisites
    const missing = [];

    for (const prerequisite
         of allPrerequisites) {

        if (!completed.has(prerequisite)) {

            missing.push(prerequisite);
        }
    }


    // --------------------------------------------------
    // 5. Display result
    // --------------------------------------------------

    if (missing.length === 0) {

        pathResult.innerHTML = `

            <div class="success-message">

                <h2>✓ Eligible</h2>

                <p>
                    You have completed all the
                    prerequisites required for:
                </p>

                <h3>
                    ${courses[selectedCourse].code}
                    -
                    ${selectedCourse}
                </h3>

            </div>

        `;

    }

    else {

        pathResult.innerHTML = `

            <div class="error-message">

                <h2>✗ Not Eligible</h2>

                <p>
                    You need to complete the following
                    prerequisite courses:
                </p>

                <ul>

                    ${missing.map(course => `

                        <li>
                            <strong>
                                ${courses[course].code}
                            </strong>
                            -
                            ${course}
                        </li>

                    `).join("")}

                </ul>

            </div>

        `;
    }
}