const fetchData = async () => {
	// async가 붙은 함수는 무조건 프로미스 객체를 반환하는 함수
	const API_KEY = '1305f5a636e58d51295d77ce2e7606b7';
	const PAGE_NUM = '&page=1';
	const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?';
	const RESULT_URL = `${BASE_URL}api_key=${API_KEY}&language=ko-KR${PAGE_NUM}`;
	// 예외 발생 가능성 있는 데이터
	try {
		// 지정된 함수가 끝날 때 까지 다음 함수 동기화(잠시 대기)
		const response = await fetch(RESULT_URL);
		console.log(`response success \n`, response);

		const data = await response.json();
		console.log(`data success \n`, data);
		return data;
	} catch (err) {
		// 발생했을 때 실행 중지를 처리할 로직
		throw err;
	}
};

export default fetchData;
