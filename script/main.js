"use.strict";

class Autor {
	constructor(name) {
		this.img = "./img/autor.png";
		this.render();
	}
	render() {
		$('.container').html(`
		<section class="hello-block">
				<!-- <img src=${this.img} alt="autor" name="autor" /> -->
				<span class="title">Доброго времени!</span>
				<section class="describe">
					<span class="hello-text">
						Меня зовут Илья. Я начинающий фронтенд - разработчик.</span
					>
					<p class="about-me">
						Представленные работы созданы в рамках обучения. Ссылка на репозитории с
						конкретной работой, а также публичная ссылка указаны в описании к работе.
					</p>
					<span class="lets-go">Приятного просмотра!</span>
				</section>
			</section>
			<section class="content"></section>
		`);
	}
}

class ContentItem {
	constructor(img, name, cardText, projectLink, sourceLink, api = "json/", projects) {
		this.img = img;
		this.name = name;
		this.cardText = cardText;
		this.projectLink = projectLink;
		this.sourceLink = sourceLink;
		this.api = api;
		this.projects = [
			{
				name: "iQulator",
				img: `./img/calculator.png`,
				projectLink: `https://ipoluhin.github.io/jQulator/index.html`,
				sourceLink: `https://github.com/ipoluhin/jQulator`,
				cardText: `jQulator - веб-калькулятор. Калькулятор способен считать неограниченное
						количество операций до вывода результирующих данных. В целом, попытка
						сымитировать реальный счетный не инженерный инструмент. Учебная работа по
						теме jquery.`
			},
			{
				name: "Одностраничник",
				img: `./img/singlepage.png`,
				projectLink: `https://github.com/ipoluhin/singlepage-template/index.html`,
				sourceLink: `https://github.com/ipoluhin/singlepage-template`,
				cardText: `Основы семантики, отзывчивая адаптивность. `
			},
			{
				name: "Магазин интерьера",
				img: `./img/interiorshop.png`,
				projectLink: `https://ipoluhin.github.io/InteriorShop/index.html`,
				sourceLink: `https://ipoluhin.github.io/InteriorShop/`,
				cardText: `Учебная работа по курсу основы верстки по макету.`
			},
			{
				name: "Работа по теме 'HTML5-CSS3'",
				img: `./img/html5-css3.png`,
				projectLink: `https://ipoluhin.github.io/html5-css3/index.html`,
				sourceLink: `https://ipoluhin.github.io/html5-css3/`,
				cardText: `Работа по курсу 'HTML5-CSS3' (с применением семантики и немного адаптивности)`
			},
			{
				name: "Промо магазин",
				img: `./img/cat-bask-search.png`,
				projectLink: `https://ipoluhin.github.io/js1-hw-Dm_Zaitsev/index.html`,
				sourceLink: `https://ipoluhin.github.io/js1-hw-Dm_Zaitsev/`,
				cardText: `Результат курса Основы Java Script. Применены классы, 
				шаблонные строки, фильтрация в поиске с помощью регулярок, 
				работа с fetch. index.html подгружается единожды. 
				Все манипуляции за счет работы с DOM силами javascript.`
			},
		];
		this.init();
	}
	/* init() {
		fetch(`${this.api}projects.json`)
			.then(result => result.json())
			.then(data => {
				this.projects = [...data];
				this.render(data);
			})
	} */
	init() {
		$('.hello-block').on('click', () => {
			$('.hello-block').fadeToggle(200);
			this.render(this.projects);
		})
	}
	render(data) {
		data.forEach((item) => {
			$('.content').html($('.content').html() + `<div class="card">
					<a	href = ${item.projectLink}
						class = "project-link"
						target = "_blank"
					>
						<img
							src = ${item.img}
							class = "card-image"
							alt = ${item.name}
					/></a>
					<h3 class = "card-title"> ${item.name}</h3>
					<p class = "card-text"> ${item.cardText}</p>
					<a href = ${item.sourceLink} class ="git-link" target ="_blank">
						<svg
							class ="git-link-img"
							height ="32"
							viewBox ="0 0 16 16"
							version ="1.1"
							width ="32"
							aria-hidden ="true"
						>
							<path
								fill-rule = "evenodd"
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
							></path></svg></a>
				</div>`);
		})
	}
}

const me = new Autor();
const content = new ContentItem();
