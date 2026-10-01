const courses = {

    "Programming Fundamentals": {
        code: "CS101",
        prerequisites: []
    },

    "Data Structures": {
        code: "CS201",
        prerequisites: [
            "Programming Fundamentals"
        ]
    },

    "Database Management": {
        code: "CS202",
        prerequisites: [
            "Programming Fundamentals"
        ]
    },

    "Object Oriented Programming": {
        code: "CS203",
        prerequisites: [
            "Programming Fundamentals"
        ]
    },

    "Algorithms": {
        code: "CS301",
        prerequisites: [
            "Data Structures"
        ]
    },

    "Operating Systems": {
        code: "CS302",
        prerequisites: [
            "Data Structures",
            "Computer Organization"
        ]
    },

    "Computer Networks": {
        code: "CS303",
        prerequisites: [
            "Data Structures"
        ]
    },

    "Artificial Intelligence": {
        code: "AI401",
        prerequisites: [
            "Algorithms",
            "Programming Fundamentals"
        ]
    },

    "Machine Learning": {
        code: "AI402",
        prerequisites: [
            "Artificial Intelligence",
            "Statistics"
        ]
    },

    "Generative AI": {
        code: "AI501",
        prerequisites: [
            "Machine Learning",
            "Artificial Intelligence"
        ]
    },

    "Computer Organization": {
        code: "CS204",
        prerequisites: []
    },

    "Statistics": {
        code: "MA201",
        prerequisites: []
    }

};