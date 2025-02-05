<script lang="ts">
  import {
    Button,
    Modal,
    Label,
    Input,
    AccordionItem,
    Accordion,
  } from "flowbite-svelte";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Carousel,
    Thumbnails
  } from "flowbite-svelte";

  let index = 0;
  let forward = true; // sync animation direction between Thumbnails and Carousel

  let formModal = false;

  async function get_info() {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let tel = (<HTMLInputElement>document.getElementById("tel")).value;

    const params = new URLSearchParams({ name, tel });
    const res = await fetch(
      `https://brams-demo.netlify.app/zayavka/?${params.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (res.ok) {
      alert("Спасибо за интерес к нашей компании! Мы свяжемся с Вами в ближайшее время.");
      formModal = false; // Close the modal after successful submission
    }
  }

  function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu-2");
    const button = document.querySelector('[aria-controls="mobile-menu-2"]');

    if (mobileMenu?.classList.contains("hidden")) {
      (mobileMenu as HTMLElement).classList.remove("hidden");
      button?.setAttribute("aria-expanded", "true");
    } else {
      (mobileMenu as HTMLElement).classList.add("hidden");
      button?.setAttribute("aria-expanded", "false");
    }
  }

  const toggleAccordion = (targetId: string) => {
    const accordionBody = document.getElementById(targetId);
    if (accordionBody !== null) {
      accordionBody.style.display =
        accordionBody.style.display === "block" ? "none" : "block";
    }
  };

  export const images = [
    {
      alt: 'BRAMS',
      src: 'https://brams-demo.netlify.app/images/carusel/1.jpg',
      title: 'BRAMS'
    },
    {
      alt: 'BRAMS',
      src: 'https://brams-demo.netlify.app/images/carusel/2.jpg',
      title: 'BRAMS'
    },
    {
      alt: 'BRAMS',
      src: 'https://brams-demo.netlify.app/images/carusel/3.jpg',
      title: 'BRAMS'
    },
    {
      alt: 'BRAMS',
      src: 'https://brams-demo.netlify.app/images/carusel/4.jpg',
      title: 'BRAMS'
    },
    {
      alt: 'BRAMS',
      src: 'https://brams-demo.netlify.app/images/carusel/5.jpg',
      title: 'BRAMS'
    },
  ];
</script>

<body>
  <header class="fixed w-full z-50">
    <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div
        class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"
      >
        <a href="/" class="flex items-center">
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white border-2 border-black p-2"
            >BRAMS</span
          >
        </a>

        <div class="flex items-center lg:order-2">
          <!--
          <Button class="mr-2" on:click={() => (formModal = true)}>Заказать</Button>
          -->
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-700 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            on:click={toggleMenu}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path></svg
            >
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path></svg
            >
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <a
                href="#main"
                class="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                aria-current="page"
                on:click={toggleMenu}>Главная</a
              >
            </li>
            <li>
              <a
                href="#delivery"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                on:click={toggleMenu}>Доставка</a
              >
            </li>
            <li>
              <a
                href="#price"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                on:click={toggleMenu}>Цены</a
              >
            </li>
            <li>
              <a
                href="#contacts"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                on:click={toggleMenu}>Контакты</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <!-- Start block -->
  <section class="bg-white dark:bg-gray-900" id="main">
    <img
      class="mx-auto w-[1280px] pt-[60px] mb-4 rounded-lg lg:mb-0 lg:flex"
      src="./images/h1.jpg"
      alt=""
    />
    <div class="flex text-center max-w-screen-xl px-4 p-3 mx-auto">
      <div class="mx-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-2xl font-extrabold leading-none tracking-tight dark:text-white"
        >
          Кухонные мойки из нержавеющей стали премиум-класса
        </h1>
        <p
          class="max-w-2xl mb-2 font-light  lg:mb-4 md:text-lg lg:text-xl"
        >
          «BRAMS» - это новая торговая марка моек из нержавеющей стали высокого качества, ориентированная на продажу в розничной сети с рекомендованными розничными ценами.
        </p>
      </div>
    </div>
  </section>
  <!-- End block -->

  <!-- Start block -->
  <section class="bg-gray-50 dark:bg-gray-800" id="about">
    <div
      class="max-w-screen-xl px-4 pt-4 mx-auto space-y-12 lg:space-y-20 lg:pt-24 lg:px-6"
    >
      <!-- Row -->
      <div class="flex text-center max-w-screen-xl px-4 p-2 mx-auto">
        <div class="mx-auto place-self-center lg:col-span-7">
          <h2
            class="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Почему выбирают нас?
          </h2>
          <p class="mb-4 font-light lg:text-xl">
            Политика фирмы-производителя – это возможность зарабатывать всем звеньям цепи продаж, поэтому эта продукция никогда не будет продаваться на маркетплейсах.
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path></svg
              >
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Поставки напрямую из Китая.</span
              >
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path></svg
              >
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Склад в Москве.</span
              >
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path></svg
              >
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Доставка по всей России.</span
              >
            </li>
          </ul>
          <p class="mb-4 font-light lg:text-xl">
            Сотрудничество с нами интересно всем, кто занимается оптом и ориентирован на качественную китайскую продукцию без посредников.
          </p>
        </div>
      </div>
      <!-- Row -->
    </div>
    <img
      class="w-[1280px] flex mx-auto pb-[10px]"
      src="./images/man.jpg"
      alt=""
    />
  </section>
  <!-- End block -->
    <!-- Start block -->
 <section class="bg-gray-50 dark:bg-gray-800">
  <div class="max-w-screen-xl min-h-200  px-4 py-2 mx-auto text-center lg:px-6">

    <Carousel {images} {forward} class="min-h-[420px]" imgClass=" w-fit "  let:Indicators let:Controls bind:index>
      <Controls />
      <Indicators />
    </Carousel>
    <Thumbnails {images} {forward} bind:index />
  </div>
  </section>
  <!-- End block -->
  <!-- Start block -->
  <section class="bg-white dark:bg-gray-900" id="delivery">
    <div
      class="text-center items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 lg:py-6 lg:px-6"
    >
      <div class="col-span-2 mb-4">
        <p class="text-lg font-medium text-purple-600 dark:text-purple-500">
          Качество продукции
        </p>
        <h2
          class="mt-3 mb-4 text-2xl font-extrabold tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Мойки BRAMS отвечают всем основным требованиям потребителя.
        </h2>
        <div
          class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700"
        ></div>
        <div
          class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
        >
          <div class="flex flex-col items-center text-center">
            <svg
              class="w-8 h-8 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                clip-rule="evenodd"
              />
            </svg>
            <h3 class="mb-2 text-xl font-bold dark:text-white">
              Нержавеющая сталь
            </h3>
            <p class="font-light text-gray-700 dark:text-gray-400">
              AISI 304
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <svg
              class="w-8 h-8 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.695 17.695 0 0 0 2.022 7.98 17.405 17.405 0 0 0 5.403 6.158 1 1 0 0 0 1.15 0 17.406 17.406 0 0 0 5.402-6.157A17.694 17.694 0 0 0 20 6.68a1 1 0 0 0-.644-.949l-7-2.666Z"
              />
            </svg>
            <h3 class="mb-2 text-xl font-bold dark:text-white">
              Толщина 
            </h3>
            <p class="font-light text-gray-700 dark:text-gray-400">
              бортов 3,0мм, чаши 1,5мм
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <svg
              class="w-8 h-8 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.005 10.19a1 1 0 0 1 1 1v.233l5.998 3.464L18 11.423v-.232a1 1 0 1 1 2 0V12a1 1 0 0 1-.5.866l-6.997 4.042a1 1 0 0 1-1 0l-6.998-4.042a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1ZM5 15.15a1 1 0 0 1 1 1v.232l5.997 3.464 5.998-3.464v-.232a1 1 0 1 1 2 0v.81a1 1 0 0 1-.5.865l-6.998 4.042a1 1 0 0 1-1 0L4.5 17.824a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1Z"
                clip-rule="evenodd"
              />
              <path
                d="M12.503 2.134a1 1 0 0 0-1 0L4.501 6.17A1 1 0 0 0 4.5 7.902l7.002 4.047a1 1 0 0 0 1 0l6.998-4.04a1 1 0 0 0 0-1.732l-6.997-4.042Z"
              />
            </svg>
            <h3 class="mb-2 text-xl font-bold dark:text-white">
              Шумопоглощающая обливка
            </h3>
            <p class="font-light text-gray-700 dark:text-gray-400">
              Всего корпуса
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <svg
              class="w-8 h-8 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z"
                clip-rule="evenodd"
              />
            </svg>
            <h3 class="mb-2 text-xl font-bold dark:text-white">
              Комплектация
            </h3>
            <p class="font-light text-gray-700 dark:text-gray-400">
              Cифон, съемный лоток, дозатор
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center text-center">
      <svg
      class="w-8 h-8 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
      fill="currentColor"
      viewBox="0 0 640 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
      <path
        d="M0 336c0 26.5 21.5 48 48 48l544 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0c-26.5 0-48 21.5-48 48L0 336z"
      />
    </svg>
    
      <h3 class="mb-2 text-xl font-bold dark:text-white">
        Размеры
      </h3>
      <p class="font-light text-gray-700 dark:text-gray-400">
        45х48, 50х45, 60х45, глубина чаши 23 cм<br> в цвете сатин и черный
      </p>
    </div>


    <div
      class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 xl:gap-24 lg:py-6 lg:px-6"
    >
      <div class="items-center col-span-2 mb-4">
        <p
          class="text-2xl font-medium dark:text-white text-center"
        >
          Порядок отгрузки
        </p>
     
  
        <p
          class="font-light text-center"
        >
          Первая пробная отгрузка – от 1 единицы товара. Дальнейшие поставки от 10 шт. в ассортименте размеров.
        </p>
        <p class="font-light  text-center">
          Доставка осуществляется транспортными компаниями.
        </p>
      </div>
    </div>
  </section>
  <!-- End block -->



  <!-- Start block -->
  <section class="bg-gray-50 dark:bg-gray-800">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <div class="max-w-screen-sm mx-auto text-center">
        <h2
          class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
        >
          Закажите BRAMS сегодня.
        </h2>
        <p class="mb-6 font-light text-gray-700 dark:text-gray-400 md:text-lg">
          Оставьте e-mail или телефон - перезвоним в течение 1 мин!
        </p>
        <Button on:click={() => (formModal = true)}>Заказать</Button>
      </div>
    </div>
  </section>
  <!-- End block -->
  <!-- Start block -->
  <section class="bg-white dark:bg-gray-900" id="contacts">
    <div class="max-w-screen-xl px-4 py-4 mx-auto lg:px-6">
      <div class="max-w-screen-sm mx-auto text-center">
        <h2
          class="mb-4 my-8 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
        >
          Контакты
        </h2>
      
        <p class="mb-6 font-light text-gray-700 dark:text-gray-400 md:text-lg">
          эл. почта: <a class="font-bold" href="mailto:brams.ltd@bk.ru" >brams.ltd@bk.ru</a>
        </p>

     
      </div>
    </div>
  </section>
  <!-- End block -->
  <footer class="bg-white dark:bg-gray-800">
    <div class="max-w-screen-xl p-2 py-2 mx-auto">
      <hr
        class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="text-center">
        <a
          href="/"
          class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          BRAMS
        </a>
        <span class="block text-sm text-center text-gray-700 dark:text-gray-400"
          >© 2024 BRAMS™. Все права защищены.
        </span>
      </div>
    </div>
  </footer>

  <!-- Modal -->
  <Modal bind:open={formModal} size="xs" autoclose={true} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
        Оставьте e-mail или телефон - перезвоним в течении 1 мин!
      </h3>
      <Label class="space-y-2">
        <span>Имя</span>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="(необязательно)"
          required
        />
      </Label>
      <Label class="space-y-2">
        <span>Телефон или Email</span>
        <Input
          type="text"
          name="tel"
          id="tel"
          placeholder="8(XXX)XXX-XX-XX или email@example.com"
          required
        />
      </Label>
      <Button type="submit" on:click={get_info} class="w-full1"
        >Отправить</Button
      >
    </form>
  </Modal>
</body>
