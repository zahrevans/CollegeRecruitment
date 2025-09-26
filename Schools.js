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
    image: "1.png"
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
    image: "2.png"
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
    image: "3.png"
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
    image: "4.png"
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
    image: "5.png"
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
    image: "6.png"
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
    image: "7.png"
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
    image: "8.png"
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
    image: "9.png"
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
    image: "10.png"
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
    image: "11.png"
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
    image: "12.png"
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
    image: "13.png"
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
    image: "14.png"
  }
];


function render(list) {
  const grid = document.getElementById("rosterGrid");
  grid.innerHTML = '';
  list.forEach((s, index) => {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3 d-flex';


    let id = s.name.split(" ");
    id = id[id.length - 1].replace(/[^a-zA-Z0-9\-]/g, '');


    const cardStyle = [
      "background: #ffffff",
      "color: #000000",
      "border-radius: 0",
      "box-shadow: 0 6px 14px rgba(0,0,0,0.12)"
    ].join("; ");

    col.innerHTML = `
      <div class="card border-0 h-100 d-flex flex-column justify-content-between" id="${id}" style="${cardStyle}">
        <div>
          <div class="leader-image-container p-2 d-flex justify-content-center align-items-center" style="height:120px;">
            <img src="${s.image ? s.image : ''}" class="mx-auto d-block" alt="${s.name} image" onerror="this.style.display='none'">
          </div>
          <div class="card-body text-center pb-3" style="padding-top:0.5rem;padding-bottom:1rem;">
            <h5 class="card-title mb-1 fw-bold" style="color:#000000;">${s.name}</h5>
           
          </div>
        </div>
        <div class="pb-3 text-center">
          <button class="btn btn-sm btn-dark show-info-btn px-3" style="background:#000;color:#fff;border:none;" 
            data-school-index="${index}" data-bs-toggle="modal" data-bs-target="#schoolModal">
            Fields of study
          </button>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
}


render(asuSchools);


const schoolModalEl = document.getElementById('schoolModal');
schoolModalEl.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget;
  const index = button.getAttribute('data-school-index');
  const school = asuSchools[index];


  const modalTitle = document.getElementById('schoolModalLabel');
  modalTitle.textContent = school.name;
  modalTitle.style.color = "#000000";


  const subjectsNode = document.getElementById('modalSubjects');
  subjectsNode.innerHTML = '';


  const hr = document.createElement('hr');
  const label = document.createElement('h6');
  subjectsNode.appendChild(hr);
  subjectsNode.appendChild(label);


  school.subjects.forEach(sub => {
    const li = document.createElement('li');
    li.textContent = sub;
    li.style.color = "#ffffff";
    li.style.marginBottom = "0.5rem";
    subjectsNode.appendChild(li);
  });


  const modalContent = schoolModalEl.querySelector('.modal-content');
  if (modalContent) {
    modalContent.style.background = '#d45c34';
    modalContent.style.color = '#ffffff';      
    modalContent.style.textAlign = 'center';   
  }

  subjectsNode.style.listStyle = 'none';
  subjectsNode.style.padding = '0';
  subjectsNode.style.margin = '0 auto';
});


schoolModalEl.addEventListener('hidden.bs.modal', function () {
  const modalContent = schoolModalEl.querySelector('.modal-content');
  if (modalContent) {
    modalContent.style.background = '';
    modalContent.style.color = '';
    modalContent.style.textAlign = '';
  }

  const subjectsNode = document.getElementById('modalSubjects');
  if (subjectsNode) {
    subjectsNode.innerHTML = ''; 
    subjectsNode.style.listStyle = '';
    subjectsNode.style.padding = '';
    subjectsNode.style.margin = '';
  }

  const modalTitle = document.getElementById('schoolModalLabel');
  if (modalTitle) modalTitle.style.color = '';
});