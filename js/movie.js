import fetchData from './FetchData.js';

// 섹션
export const createCard = async () => {
	const app = document.getElementById('app');
	const section = document.createElement('section');
	const movieUl = document.createElement('ul');

	section.id = 'section';
	movieUl.id = 'movie-list';
	app.appendChild(section);
	section.appendChild(movieUl);

	const movies = await fetchData();
	movieUl.innerHTML += cardList(movies);
	movieUl.addEventListener('click', handleClick);
};

// id
const handleClick = (e) => {
	e.preventDefault();
	const target = e.target;
	const list = document.getElementById('movie-list');

	if (target === list) {
		return false;
	} else if (target !== list.childNodes) {
		alert(`id : ${target.parentNode.id}`);
	}
};

// 영화 카드 외부 구현
const cardList = (movies) => {
	let temp = movies
		.map((movie) => {
			const { title, poster_path, vote_average, overview, id } = movie;
			return `
		<li class="movie-item" id=${id}>
			<img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
			<div class="info">
				<h3 class="movie-title">${title}</h3>
				<p>⭐${vote_average}</p>
			</div>
			<div class="overview">
				<h3>overview</h3>
				<strong>${title}</strong>
				<p class="movie-content">
					<span>${overview}</span>
				</p>
			</div>
		</li>
	`;
		})
		.join('');
	// 리스트을 순회 할때마다 재할당 되어 join('') 으로 합침
	return temp;
};

export default createCard;
