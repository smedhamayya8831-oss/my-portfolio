
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal website showcasing my skills, projects, and contact information.",
    tech: "HTML · CSS · JavaScript",
    link: "#contact"
  },
  {
    title: "Tailoring Management System",
    description:
      "A web application concept to manage tailoring orders and customer information.",
    tech: "HTML · CSS · JavaScript · PHP · MySQL",
    link: "#contact"
  },
  {
    title: "Number Guessing Game",
    description:
      "A JavaScript game where users try to guess a randomly generated number.",
    tech: "HTML · CSS · JavaScript",
    link: "#contact"
  }
];

// Dynamically display projects
const projectList = document.getElementById("project-list");

projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tech = document.createElement("p");
  tech.className = "tech";
  tech.textContent = project.tech;

  const link = document.createElement("a");
  link.className = "project-link";
  link.href = project.link;
  link.textContent = "Contact me →";

  card.append(title, description, tech, link);
  projectList.appendChild(card);
});

// Validate contact form
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  status.className = "error";

  if (!name || !email || !subject || !message) {
    status.textContent = "Please fill in all fields.";
    return;
  }

  if (name.length < 2) {
    status.textContent = "Name must contain at least 2 characters.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    status.textContent = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    status.textContent = "Message must contain at least 10 characters.";
    return;
  }

  status.className = "success";
  status.textContent =
    "Form validation successful! This demo does not send messages.";

  form.reset();
});

// Smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Automatically update footer year
document.getElementById("year").textContent =
  new Date().getFullYear();
