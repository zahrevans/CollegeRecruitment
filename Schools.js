const asuSchools = [
  {
    name: "The College of Liberal Arts and Sciences",
    subjects: [
      "Natural Sciences (Biology, Chemistry, Physics, Life Sciences)",
      "Social Sciences (Psychology, Sociology, Anthropology, Political Science)",
      "Humanities (History, Philosophy, Religious Studies, Languages & Cultures)",
      "Earth & Space Sciences (Geological / Environmental Sciences, Astronomy)",
      "Interdisciplinary & Transdisciplinary Studies"
    ],
    image: ""
  },
  {
    name: "Ira A. Fulton Schools of Engineering",
    subjects: [
      "Electrical / Computer Engineering",
      "Mechanical Engineering",
      "Civil & Environmental Engineering",
      "Computer Science",
      "Materials Science",
      "Bioengineering",
      "Robotics",
      "Sustainable Engineering"
    ],
    image: ""
  },
  {
    name: "W. P. Carey School of Business",
    subjects: [
      "Accounting",
      "Finance",
      "Marketing",
      "Management",
      "Supply Chain & Logistics",
      "Information Systems",
      "Entrepreneurship",
      "Business Analytics"
    ],
    image: ""
  },
  {
    name: "Herberger Institute for Design and the Arts",
    subjects: [
      "Visual & Fine Arts",
      "Design",
      "Film / Media",
      "Theater / Performance",
      "Music",
      "Dance",
      "Arts & Media Engineering"
    ],
    image: ""
  },
  {
    name: "Edson College of Nursing and Health Innovation",
    subjects: [
      "Nursing",
      "Health Sciences",
      "Interprofessional Health Practice",
      "Health Technology",
      "Evidence-based Care"
    ],
    image: ""
  },
  {
    name: "College of Health Solutions",
    subjects: [
      "Population Health",
      "Biomedical Informatics",
      "Nutrition & Wellness",
      "Exercise & Wellness",
      "Diagnostics & Therapeutics",
      "Behavioral Health"
    ],
    image: ""
  },
  {
    name: "Walter Cronkite School of Journalism and Mass Communication",
    subjects: [
      "Journalism",
      "Mass Communication",
      "Media Studies",
      "Broadcast / Digital Media",
      "Investigative Journalism",
      "Strategic Communications"
    ],
    image: ""
  },
  {
    name: "Thunderbird School of Global Management",
    subjects: [
      "Global Business",
      "International Management",
      "Diplomacy & Trade",
      "Global Leadership",
      "Cross-Cultural Management"
    ],
    image: ""
  },
  {
    name: "Mary Lou Fulton Teachers College",
    subjects: [
      "Education (K-12 / Secondary)",
      "Teacher Preparation",
      "Curriculum & Instruction",
      "Educational Leadership",
      "Learning Sciences"
    ],
    image: ""
  },
  {
    name: "Sandra Day O’Connor College of Law",
    subjects: [
      "Constitutional Law",
      "International Law",
      "Business Law",
      "Legal Practice & Skills",
      "Public Policy & Justice"
    ],
    image: ""
  },
  {
    name: "Watts College of Public Service and Community Solutions",
    subjects: [
      "Public Policy",
      "Social Work",
      "Public Administration",
      "Urban Planning / Community Development",
      "Non-profit Leadership"
    ],
    image: ""
  },
  {
    name: "New College of Interdisciplinary Arts and Sciences",
    subjects: [
      "Humanities",
      "Social Sciences",
      "Natural Sciences",
      "Cross-disciplinary Programs",
      "Smaller campus environments"
    ],
    image: ""
  },
  {
    name: "University College",
    subjects: [
      "General Education / Core Curriculum",
      "Exploratory Programs",
      "First Year / Transition Studies",
      "Support for undecided majors",
      "Foundational math / writing / science courses"
    ],
    image: ""
  },
  {
    name: "College of Global Futures",
    subjects: [
      "Sustainability & Environment",
      "Resilience",
      "Environmental Policy",
      "Global Challenges & Futures Studies",
      "Systems Innovation"
    ],
    image: ""
  }
];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

const schoolColors = {
      "The College of Liberal Arts and Sciences": "#6C9AEE",
      "Ira A. Fulton Schools of Engineering": "#EE8130",
      "W. P. Carey School of Business": "#F7D02C",
      "Herberger Institute for Design and the Arts": "#A33EA1",
      "Edson College of Nursing and Health Innovation": "#96D9D6",
      "College of Health Solutions": "#7AC74C",
      "Walter Cronkite School of Journalism and Mass Communication": "#F95587",
      "Thunderbird School of Global Management": "#B6A136",
      "Mary Lou Fulton Teachers College": "#A6B91A",
      "Sandra Day O’Connor College of Law": "#735797",
      "Watts College of Public Service and Community Solutions": "#B7B7CE",
      "New College of Interdisciplinary Arts and Sciences": "#A8A77A",
      "University College": "#D685AD",
      "College of Global Futures": "#6F35FC"
    };

    // Render function (matches the structure and class usage in your sample)
    function render(list) {
      const grid = document.getElementById("rosterGrid");
      grid.innerHTML = '';
      list.forEach((s, index) => {
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4 col-lg-3';
        const cardColor = schoolColors[s.name] || "#777";
        // ID derived from last word of name (mirrors sample method)
        let id = s.name.split(" ");
        id = id[id.length - 1].replace(/[^a-zA-Z0-9\-]/g, '');
        // Build inner HTML following the same card markup pattern
        col.innerHTML = `
  <div class="card shadow rounded-4 border-0 overflow-hidden text-white" style="background: linear-gradient(135deg, ${cardColor} 80%, #fff2 100%);" id="${id}">
    <div class="leader-image-container p-2 d-flex justify-content-center align-items-center" style="height:120px;">
      <img src="${s.image ? s.image : ''}" class="mx-auto d-block" alt="${s.name} image" onerror="this.style.display='none'">
    </div>
    <div class="card-body text-center pb-3">
      <h5 class="card-title mb-1 fw-bold">${s.name}</h5>
      <p class="small mb-2">College / School</p>
      <button class="btn btn-sm btn-light show-info-btn px-3" data-school-index="${index}" data-bs-toggle="modal" data-bs-target="#schoolModal">
        Fields of study
      </button>
    </div>
  </div>
`;
        grid.appendChild(col);
      });
    }

    // Initial render
    render(asuSchools);

    // Modal logic: populate content when modal is shown (Bootstrap modal event)
    const schoolModalEl = document.getElementById('schoolModal');
    schoolModalEl.addEventListener('show.bs.modal', function (event) {
      const button = event.relatedTarget;
      const index = button.getAttribute('data-school-index');
      const school = asuSchools[index];

      // Title
      document.getElementById('schoolModalLabel').textContent = school.name;

      // Subjects list
      const subjectsNode = document.getElementById('modalSubjects');
      subjectsNode.innerHTML = '';
      school.subjects.forEach(sub => {
        const li = document.createElement('li');
        li.textContent = sub;
        subjectsNode.appendChild(li);
      });

      // Set modal background to a gradient using the school's color (mirrors example)
      const modalContent = schoolModalEl.querySelector('.modal-content');
      const color = schoolColors[school.name] || "#777";
      modalContent.style.background = `linear-gradient(to right, ${color} 50%, #ffffff33 50%)`;
    });

    // Reset modal background on hide (optional, mirrors sample)
    schoolModalEl.addEventListener('hidden.bs.modal', function () {
      const modalContent = schoolModalEl.querySelector('.modal-content');
      if (modalContent) modalContent.style.background = '';
    });
  