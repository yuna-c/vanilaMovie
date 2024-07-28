import { config } from './config.js';

// 데이터 가져오기
const fetchData = async () => {
	// async가 붙은 함수는 무조건 프로미스 객체를 반환하는 함수
	const API_KEY = config.TMDBKEY;
	const BASE_URL = 'https://api.themoviedb.org/3/movie/top_rated?';
	// 'https://api.themoviedb.org/3/movie/popular?'; 최신영화
	const RESULT_URL = `${BASE_URL}language=ko-KR&api_key=${API_KEY}`;
	const SEARCH_API = `https://api.themoviedb.org/3/search/movie?language=ko-KR&api_key=${API_KEY}&query="`; // 페이지네이션 실패

	// 예외 발생 가능성 있는 데이터(await로 대기시켰다가 실행 준비)
	try {
		const res = await fetch(RESULT_URL);
		const data = await res.json();
		return data.results;
	} catch (err) {
		// err시 실행 중지를 처리할 로직
		throw console.error(err);
	}
};

export default fetchData;
