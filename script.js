document.addEventListener("DOMContentLoaded", function () {
  // Inicialização do Swiper
  const swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Carregar serviços da API

  function carregarServicos() {
    const servicos = [
      {
        title: "Recrutamento e Seleção",
        description: "Elaboração de Descrições de Cargos, Processos Seletivos, Headhunting, encontramos os candidatos ideais.",
      },
      {
        title: " Treinamento e Desenvolvimento",
        description: "Programas de Capacitação, Mentoria e Coaching, Avaliação de Desempenho.",
      },
      {
        title: "Gestão de Performance",
        description: "Implementação de Sistemas de Avaliação de Desempenho, Criação de ferramentas e processos para avaliar e melhorar o desempenho dos funcionários.",
      },

      {
        title: "Consultoria em Cultura Organizacional",
        description: "Avaliação do Clima Organizacional, Desenvolvimento de Cultura.",
      },
      {
        title: "Gestão de Benefícios e Compensação",
        description: "Análise de Pacotes de Benefícios, Estruturação de Salários",
      },
      {
        title: "Diversidade e Inclusão",
        description: "Desenvolvimento de Estratégias de Inclusão, Treinamentos sobre Diversidade.",
      },
    ];
    const container = document.querySelector(".services-container");
    servicos.forEach((servico) => {
      const div = document.createElement("div");
      div.className = "servico";
      div.setAttribute("data-aos", "fade-up");
      div.innerHTML = `
              <h3>${servico.title}</h3>
              <p>${servico.description}</p>
          `;
      container.appendChild(div);
    });
  }

  // Função para carregar depoimentos
  const depoimentosFicticios = [
    "O serviço foi excelente! Fiquei muito satisfeito.",
    "A experiência superou minhas expectativas. Recomendo a todos!",
    "Atendimento incrível, com certeza voltarei a usar os serviços.",
    "Fiquei impressionado com a qualidade e eficiência.",
    "Um serviço de primeira, estou muito contente com o resultado.",
  ];

  function carregarTestemunhos() {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na rede");
        }
        return response.json();
      })
      .then((data) => {
        const container = document.querySelector(".testimonials-container");
        data.results.forEach((user) => {
          const depoimentoAleatorio = depoimentosFicticios[Math.floor(Math.random() * depoimentosFicticios.length)];
          const div = document.createElement("div");
          div.className = "testemunho";
          div.setAttribute("data-aos", "fade-up");
          div.innerHTML = `
                    <img src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}" class="foto-cliente">
                    <h3>${user.name.first} ${user.name.last}</h3>
                    <p>${depoimentoAleatorio}</p>
                    <small>Por: ${user.email}</small>
                `;
          container.appendChild(div);
        });
      })
      .catch((error) => console.error("Erro ao carregar depoimentos:", error));
  }

  // Validação e envio do formulário
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      // Envio via EmailJS
      emailjs
        .send("SERVICE_ID", "TEMPLATE_ID", {
          name,
          email,
          phone,
          message,
        })
        .then(() => {
          alert("Mensagem enviada com sucesso!");
        })
        .catch(() => {
          alert("Erro ao enviar mensagem. Tente novamente mais tarde.");
        });
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });

  // Inicialização do AOS.js

  carregarServicos();
  carregarTestemunhos();
  AOS.init();
});

const swiper = new Swiper(".swiper-container", {
  // Opções do Swiper
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
});
