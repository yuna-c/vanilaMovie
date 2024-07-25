import fetchData from './FetchData.js';

export const moviesList = async () => {
	const app = document.getElementById('app');
	const section = document.createElement('section');
	const movieList = document.createElement('ul');
	movieList.setAttribute('id', 'movie-list');

	app.appendChild(section);
	section.appendChild(movieList);
	const movies = await fetchData();

	console.log(movies);

	const card = movies
		.map((movie) => {
			return `
      <li class="movie-item" id=${movie.id}>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"> 
        <div class="info">
          <h3> ${movie.title}</h3>
          <span>⭐${movie.vote_average}</span>
        </div>
        <div class="overview">
          <h3>overview</h3>
					<strong>${movie.title}</strong>
          <p>${movie.overview}</p>
        </div>
      </li>
    `;
		})
		.join('');
	// '' 빈 문자열을 표시하지 않으면 ',' 가 뜨는 이유가 뭘까
	// 리스트을 순회 할때마다 재할당 되어 join('') 으로 합쳐짐

	movieList.innerHTML = card;

	const handleClick = (e) => {
		const target = e.target;
		if (target === movieList) return; // 카드 아닐시 접근 막음
		target.matches('.movie-item') ? alert(`id : ${target.id}`) : alert(`id : ${target.parentNode.id}`); // 카드의 자식 태그 (img, div, p) 클릭 시 부모의 id로 접근
	};

	movieList.addEventListener('click', handleClick);
};

export default moviesList;
